import {
    getAllPokemon,
    getAllPokemonType
  } from "../services/authServices";
 
  
  
  const usePokemon = () => {
   

  
  
     const getAllPokemonData = async () => {
      const response = await getAllPokemon();
       console.log("Response Pokemon Data", response);
      
      return response;
    };
  
    const getAllPokemonTypeList = async() =>{
        const response = await getAllPokemonType();
        console.log("Response of Pokemon type",response);
        return response;
    }
      
       
      
       
    return {
     getAllPokemonData,
     getAllPokemonTypeList
     
    }
  }
  
  export default usePokemon