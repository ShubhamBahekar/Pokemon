import { getApi} from "./api";

export const getAllPokemon = async () => getApi("/pokemon?limit=50");
export const getAllPokemonType = async() => getApi("/type");
export const getPokemon = async(data) =>getApi(`/pokemon/${data}`) ;