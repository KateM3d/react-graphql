import useCharacters from "../hooks/useCharacters";
import { Link } from "react-router-dom";
import "./CharactersList.css";

export const CharactersList = () => {
  const { error, loading, data } = useCharacters();

  console.log(error, data, loading);
  if (loading) return <div>Loadding...</div>;
  if (error) return <div>Oops! Something went wrong...</div>;

  return (
    <div className="characterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} alt="img" />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};
