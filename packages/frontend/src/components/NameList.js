import React from "react";

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

const NameList = (props) => {
  const {
    sortBy,
    setSortBy,
    listVisible,
    setListVisible,
    loading,
    error,
    data 
  } = props;
  // the prop that is not currently set as sorting criteria
  const diffProp = sortBy === "amount" ? "name" : "amount";
  // .slice() to make a modifiable copy
  const sortedData = data && sortArrBy(data.allNames.slice(), sortBy);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {sortedData &&
        <div>
          <div className="horizontal">
            <button onClick={() => setSortBy(diffProp)}>
              {`Sort by ${diffProp}`}
            </button>
            <button onClick={() => setListVisible(!listVisible)}>
              Search by name
            </button>
          </div>
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

export { NameList };
