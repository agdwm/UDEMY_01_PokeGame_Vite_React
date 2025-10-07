import { useState, useEffect, useCallback } from "react";
import type { Pokemon } from "../types/pokemon.interface";
import { pokemonService } from "../services/pokemon.services";

// Definimos un "enum" con as const para valores literales
export const GameState = {
  PLAYING: "playing",
  WRONG: "wrong",
  CORRECT: "correct",
} as const;

// Creamos un tipo a partir de los valores del objeto anterior
export type GameState = (typeof GameState)[keyof typeof GameState];

export const useGameManager = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [gameState, setGameState] = useState<GameState>(GameState.PLAYING);

  const handlePokemonNameSubmit = useCallback(
    (userInput: string) => {
      if (!pokemon) return;

      const isValid = pokemonService.isPokemonNameValid(
        pokemon.name,
        userInput
      );

      setGameState(isValid ? GameState.CORRECT : GameState.WRONG);
    },
    [pokemon]
  );

  const loadNewPokemon = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setGameState(GameState.PLAYING);
    try {
      const randomPokemon = await pokemonService.getRandomPokemon();
      setPokemon(randomPokemon);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNewPokemon();
  }, [loadNewPokemon]);

  return {
    pokemon,
    isLoading,
    error,
    loadNewPokemon,
    handlePokemonNameSubmit,
    gameState,
  };
};
