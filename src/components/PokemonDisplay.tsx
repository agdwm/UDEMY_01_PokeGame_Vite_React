import type { Pokemon } from "../types/pokemon.interface";
import Spinner from "./Spinner";
import { GameState } from "../hooks/use-game-manager";

interface Props {
  pokemon: Pokemon | null;
  isLoading: boolean;
  gameState: GameState;
}

const PokemonDisplay = ({ pokemon, isLoading, gameState }: Props) => {
  const showAnswer = gameState !== GameState.PLAYING;
  const name = pokemon?.name;
  const image = pokemon?.image;

  console.log(name);

  return (
    <div className="card">
      <div className="card-header">
        <h1 className="text-center">
          {showAnswer ? name?.toUpperCase() : "¿Quién es ese Pokémon?"}
        </h1>
      </div>
      <div
        className="card-body d-flex justify-content-center align-items-center"
        style={{
          aspectRatio: "1 / 1",
          padding: 0,
        }}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <img
            src={image}
            alt=""
            className="img-fluid mx-auto d-block"
            style={{
              maxHeight: "300px",
              objectFit: "contain",
              filter: showAnswer ? "none" : "brightness(0)",
              transition: "filter 0.3s ease-in-out",
            }}
          />
        )}
      </div>
    </div>
  );
};
export default PokemonDisplay;
