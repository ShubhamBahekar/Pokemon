import { React, useState, useEffect, createContext } from "react";
import usePokemon from "../hooks/usePokemon";

export const pokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [loading, setLoading]       =     useState(true);
  const [abilities,setAbilities]    =     useState([]);
  const [stats,setStats]            =     useState([]);
  const [moves, setMoves]           =     useState([]);
  const [evolutionSpecies, setEvolutionSpecies] = useState([]);

  const { getAllPokemonData, getAllPokemonTypeList,getPokemonDetails } = usePokemon();

  
  const batchSize = 5;
  const fetchPokemonBatch = async (batch) => {
    const batchData = await Promise.all(
      batch.map(async (pokemon) => {
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
    return batchData;
  };

  useEffect(() => {
    const fetchPokemonData = async () => {
      setLoading(true);
      try {
      
        const data = await getAllPokemonData();
        
       
        const totalBatches = Math.ceil(data.results.length / batchSize);
        const allDetailedPokemon = [];

        
        for (let i = 0; i < totalBatches; i++) {
          const batch = data.results.slice(i * batchSize, (i + 1) * batchSize);
          const batchData = await fetchPokemonBatch(batch); 
          allDetailedPokemon.push(...batchData); 
        }

        setAllPokemonData(allDetailedPokemon); 

        const responseData = await getAllPokemonTypeList();
        const names = responseData.results.map((type) => type.name);
        setPokemonType(names);

      } catch (error) {
        console.error("Error in fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [getAllPokemonData, getAllPokemonTypeList]);
  





const fetchPokemonByName = async (pokemonName) => {
  try {
    const pokemonData = await getPokemonDetails(pokemonName); 
    console.log("Got Pokémon details:", pokemonData);

    const dataOfAbility = pokemonData?.abilities?.map((item) => item.ability?.name) || [];
    const dataOfStats = pokemonData?.stats?.map((item)=>item.stat.name) || [];
    const dataOfMoves = pokemonData?.moves?.map((item)=>item.move.name) || [];
    setAbilities(dataOfAbility);
    setStats(dataOfStats);
    setMoves(dataOfMoves);


    const speciesRes = await fetch(pokemonData.species.url);
    const speciesData = await speciesRes.json();
    const evoRes = await fetch(speciesData.evolution_chain.url);
    const evoData = await evoRes.json();
    

    const getSpeciesNames = (node) => {
      const names = [node.species.name];
      node.evolves_to.forEach(evo => names.push(...getSpeciesNames(evo)));
      return names;
    };

    const speciesList = getSpeciesNames(evoData.chain);
    setEvolutionSpecies(speciesList);
  } catch (error) {
    console.error("Failed to fetch evolution chain:", error);
    setEvolutionSpecies([]);
    setAbilities([]);
    setStats([]);
    setMoves([]);
  }
};



  
  const handleTypeChange = (e) => {
    const typeName = e.target.value;
    setSelectedType(typeName);
  };

  const handlePokemonSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filterPokemonData = allPokemonData.filter((pokemon) => {
    const matchesType =
      !selectedType || pokemon.types.includes(selectedType.toLowerCase());
    const matchesSearch =
      !searchText ||
      pokemon.name.toLowerCase().startsWith(searchText.toLowerCase()) ||
      pokemon.id.toString() === searchText;
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
        loading,
        fetchPokemonByName,
        evolutionSpecies,
        abilities,
        stats,
        moves,
      }}
    >
      {children}
    </pokemonContext.Provider>
  );
};

export default PokemonProvider;
