import { getApi} from "./api";

export const getAllPokemon = async () => getApi("/pokemon?limit=150");
export const getAllPokemonType = async() => getApi("/type");