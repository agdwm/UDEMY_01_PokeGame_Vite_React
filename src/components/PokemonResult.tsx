import cx from "classnames";
import { GameState } from "../hooks/use-game-manager";

interface Props {
  loadNewPokemon: () => void;
  gameState: GameState;
}

const PokemonResult = ({ loadNewPokemon, gameState }: Props) => {
  // Clases condicionales usando classnames
  const alertClass = cx("alert", {
    "alert-success": gameState === GameState.CORRECT,
    "alert-danger": gameState === GameState.WRONG,
  });

  if (gameState === GameState.PLAYING) return null;

  return (
    <div className={`${alertClass} text-center`}>
      {gameState === GameState.CORRECT ? (
        <h3>
          ¡Correcto!
          <i className="bi bi-emoji-smile-fill" />
        </h3>
      ) : (
        <h3>
          ¡Incorrecto!
          <i className="bi bi-emoji-smile-upside-down" />
        </h3>
      )}

      <button className="btn btn-dark mt-3" onClick={loadNewPokemon}>
        Volver a jugar
      </button>
    </div>
  );
};

export default PokemonResult;
