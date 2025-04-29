import { getAllPokemon, getAllPokemonType } from "../services/authServices";
import { useCallback } from "react";

const usePokemon = () => {
  const getAllPokemonData = useCallback(async () => {
    const response = await getAllPokemon();
    return response;
  }, []);
  
  const getAllPokemonTypeList = useCallback(async () => {
    const response = await getAllPokemonType(); 
    return response;
  }, []);

  return {
    getAllPokemonData,
    getAllPokemonTypeList,
  };
};

export default usePokemon;
