import "./index.scss";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { NameList } from "./components/NameList";
import { NameSearch } from "./components/NameSearch";
import ReactDOM from "react-dom";
import { Top } from "./components/Top";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: "/graphql"
});
const client = new ApolloClient({ cache, link });

const GET_ALL_NAMES = gql`
  query GetAllNames {
    allNames {
      name
      amount
    }
  }
`;

const App = () => {
  const [ sortBy, setSortBy ] = useState("amount");
  const [ listVisible, setListVisible ] = useState(true);
  const { loading, error, data } = useQuery(GET_ALL_NAMES);
  
  return (
    <div>
      <Top />
      {listVisible ?
        <NameList
          sortBy={sortBy}
          setSortBy={setSortBy}
          listVisible={listVisible}
          setListVisible={setListVisible}
          loading={loading}
          error={error}
          data={data}
        /> :
        <NameSearch
          listVisible={listVisible}
          setListVisible={setListVisible}
          data={data}
        />
      }
    </div>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById("root")
);
