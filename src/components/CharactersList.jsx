import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        gender
      }
    }
  }
`;

export const CharactersList = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

  console.log(error, data, loading);
  if (loading) return <div>Loadding...</div>;
  if (error) return <div>Oops! Something went wrong...</div>;

  return (
    <div className="characterList">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} alt="img" />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};
