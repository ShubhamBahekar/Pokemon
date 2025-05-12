import { getAllPokemon, getAllPokemonType,getPokemon } from "../services/authServices";
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

 const getPokemonDetails = useCallback(async(data)=>{
  
 
const response = await getPokemon(data); 
console.log("PDetails...",response);
return response;
 },[])

  return {
    getAllPokemonData,
    getAllPokemonTypeList,
    getPokemonDetails,
  };
};

export default usePokemon;
