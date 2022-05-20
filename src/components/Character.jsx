import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router-dom";
import "./Character.css";

const Character = () => {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  if (loading) return <div>Loadding...</div>;
  if (error) return <div>Oops! Something went wrong...</div>;

  return (
    <div className="character">
      <img src={data.character.image} alt="img" width={350} height={350} />
      <div className="character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="character-episode">
          {data.character.episode.map((episode, index) => {
            return (
              <div key={index}>
                {episode.name} - {episode - episode}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
