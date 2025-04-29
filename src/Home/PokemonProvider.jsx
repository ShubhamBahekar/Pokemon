import { React, useState, useEffect, createContext } from "react";
import usePokemon from "../hooks/usePokemon";


export const pokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [pokemonType,setPokemonType] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [loading,setLoading] = useState(true);
 
   const {getAllPokemonData,
    getAllPokemonTypeList
     } = usePokemon();


  useEffect(() => {
    const fetchPokemonData = async () => {
      setLoading(true);
        try {
          const data = await getAllPokemonData(); 
          const detailedPokemon = await Promise.all(
            data.results.map(async (pokemon) => {
              const res = await fetch(pokemon.url);
              const details = await res.json();
              return {
                name: pokemon.name,
                image: details.sprites.front_default,
                id: details.id,
                types: details.types.map((typeInfo) => typeInfo.type.name),
              };
            })
          );
          setAllPokemonData(detailedPokemon);
         

           const responseData = await getAllPokemonTypeList();
          //  console.log("responseData",responseData);
          const names = responseData.results.map((type)=>type.name)
          setPokemonType(names);
      } catch (e) {
        console.error("Error in fetching data", e);
      }finally{
        setLoading(false);
      }
    };        
    fetchPokemonData();
   
    
  }, [getAllPokemonData,getAllPokemonTypeList]);


   
const handleTypeChange = (e) =>{
const typeName = e.target.value;
// console.log("SlelectedTypeName....",typeName);
setSelectedType(typeName);

}

const handlePokemonSearch = (e) =>{

// console.log("Search...",e.target.value);
setSearchText(e.target.value);

}

const filterPokemonData = allPokemonData.filter((pokemon) => {
    const matchesType =
      !selectedType || pokemon.types.includes(selectedType.toLowerCase());
    const matchesSearch =
      !searchText || pokemon.name.toLowerCase().includes(searchText.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <pokemonContext.Provider
      value={{
        filterPokemonData,
        pokemonType,
        handleTypeChange,
        selectedType,
        handlePokemonSearch,
        searchText,
        loading
        
      }}
    >
      {children}
    </pokemonContext.Provider>
  );
};

export default PokemonProvider;
