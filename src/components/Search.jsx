import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");
  const [getLocations, { loading, error, data, call }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );
  console.log(error, loading, call, data);
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>Loading...</div>}
      {loading && <div>Error, Something went wrong...</div>}
      {data && (
        <ul>
          {data.characters.results.map((character, index) => {
            return <li key={index}>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
