import React, { useEffect, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_SINGLE_AMOUNT = gql`
  query GetName($name: String!) {
    amount(name: $name)
  }
`;

const NameSearch = ({ listVisible, setListVisible, data }) => {
  const [ name, setName ] = useState("Ville");
  const [getAmount, amountQuery] = useLazyQuery(GET_SINGLE_AMOUNT);

  useEffect(() => {
    getAmount({ variables: { name } });
  }, [getAmount, name]);

  return (
    <div>
      <button onClick={() => setListVisible(!listVisible)}>
        Go back
      </button>
      {data && <label>
        Search by name:
        <select value={name} onChange={e => setName(e.target.value)}>
          {data.allNames.map((n, idx) => (
            <option value={n.name} key={idx}>{n.name}</option>
          ))}
        </select>
      </label>}
      {amountQuery.loading && "Loading..."}
      {amountQuery.error && "Error!"}
      {amountQuery.data && <p>
        {`${name}, amount: ${amountQuery.data.amount}.`}
      </p>}
    </div>
  );
};

export { NameSearch };
