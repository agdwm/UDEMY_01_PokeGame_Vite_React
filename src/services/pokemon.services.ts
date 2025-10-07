import { getRandomIntInclusive } from "../utils/random-number";
import type { Pokemon } from "../types/pokemon.interface";

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";
const MAX_POKEMON_COUNT = 151;

export const getRandomPokemon = async (): Promise<Pokemon> => {
  const randomId = getRandomIntInclusive(1, MAX_POKEMON_COUNT);
  const response = await fetch(`${POKEMON_API_URL}/${randomId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch pokemon with id ${randomId}`);
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
  };
};

const normalizePokemonName = (name: string): string => {
  return name
    .toLowerCase()
    .trim()
    .normalize("NFD") // Normaliza caracteres acentuados
    .replace(/[\u0300-\u036f]/g, "") // Remove caracteres acentuados
    .replace(/[^a-z0-9]/g, ""); // Elimina caracteres especiales
};

const isPokemonNameValid = (
  pokemonName: string,
  userInput: string
): boolean => {
  const normalizedPokemonName = normalizePokemonName(pokemonName);
  const normalizedUserInput = normalizePokemonName(userInput);

  return normalizedPokemonName === normalizedUserInput;
};

export const pokemonService = {
  getRandomPokemon,
  isPokemonNameValid,
};
