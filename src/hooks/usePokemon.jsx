import { getAllPokemon, getAllPokemonType,getPokemon } from "../services/authServices";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom"
const usePokemon = () => {

  const navigate = useNavigate();

  const getAllPokemonData = useCallback(async () => {
    const response = await getAllPokemon();
    return response;
  }, []);
  
  const getAllPokemonTypeList = useCallback(async () => {
    const response = await getAllPokemonType(); 
    return response;
  }, []);

 const getPokemonDetails = useCallback(async(data)=>{
  console.log("Pokemon Name in Hook",data);
  navigate("/pokemonview")
const response = await getPokemon(data); 
console.log("Response Of Pokemon in Detail",response);

return response;
 },[])

  return {
    getAllPokemonData,
    getAllPokemonTypeList,
    getPokemonDetails,
  };
};

export default usePokemon;
