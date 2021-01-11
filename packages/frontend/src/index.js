import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: "/graphql"
});
const client = new ApolloClient({ cache, link });

const App = () => {
  const [ sortBy, setSortBy ] = useState("amount");

  const GET_ALL_NAMES = gql`
    query GetAllNames {
      allNames {
        name
        amount
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ALL_NAMES);

  /**
   * Sort an array of Name objects by amount or alphabetically.
   * @param { Array<{ name: String, amount: number }> } arr array to sort
   * @param { "name" | "amount" } prop property to sort by
   * @returns { Array<{ name: String, amount: number }> } sorted array
   */
  const sortArrBy = (arr, prop) => {
    if (prop === "name") return arr.sort(
      (a, b) => a.name.localeCompare(b.name)
    );
    else return arr.sort(
      (a, b) => b.amount - a.amount
    );
  };
  
  const countNames = (namesArr) => {
    return namesArr.reduce((acc, cur) => acc + cur.amount, 0);
  };

  // the prop that is not currently set as sorting criteria
  const diffProp = sortBy === "amount" ? "name" : "amount";

  // .slice() to make a modifiable copy
  const sortedData = data && sortArrBy(data.allNames.slice(), sortBy);
  
  return (
    <div>
      <h2>nappmono</h2>
      <p>
        <i>
          Name App Monorepo.
          Source: <a href="https://github.com/jalho/nappmono">GitHub</a>.
        </i>
      </p>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {sortedData &&
        <div>
          <button onClick={() => setSortBy(diffProp)}>
            {`Sort by ${diffProp}`}
          </button>
          <ol>
            {
              sortedData.map((n, idx) => (
                <li key={idx}>
                  {`${n.name}, amount: ${n.amount}.`}
                </li>
              ))
            }
          </ol>
          <p>
            {
              `Unique names: ${sortedData.length}.
              Names in total: ${countNames(sortedData)}.`
            }
          </p>
        </div>
      }
    </div>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById("root")
);
