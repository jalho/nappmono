import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: "/graphql"
});
const client = new ApolloClient({ cache, link });

const App = () => {
  const GET_ALL_NAMES = gql`
    query GetAllNames {
      allNames {
        name
        amount
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ALL_NAMES);
  
  // .slice() to make a modifiable copy
  const sortedData = data && data.allNames.slice().sort(
    (a, b) => b.amount - a.amount
  );

  const countNames = (namesArr) => {
    return namesArr.reduce((acc, cur) => acc + cur.amount, 0);
  };

  /* TODO!
    - Button: List names in alphabetical order!
    - Input: Return the amount of the name given as a parameter!
    - Modularize code!
    - Style UI!
   */
  return (
    <div>
      <h2>nappmono</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {sortedData &&
        <div>
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
              Names in total: ${countNames(sortedData)}`
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
