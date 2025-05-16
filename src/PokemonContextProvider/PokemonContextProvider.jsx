import { React, useState, useEffect, createContext } from "react";
import usePokemon from "../hooks/usePokemon";
import { useNavigate } from "react-router-dom";
export const pokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [loading, setLoading] = useState(true);
  const [abilities, setAbilities] = useState([]);
  const [stats, setStats] = useState([]);
  const [moves, setMoves] = useState([]);
  const [movesInDetail, setMovesInDetail] = useState(false);
  const [evolutionSpecies, setEvolutionSpecies] = useState([]);
  const [pokemonImage, setPokemonImage] = useState(null);
 
  const [pokemonName,setPokemonName] = useState([]);
  const [favourite, setFavourite] = useState(false);
  const [favouriteList, setFavouriteList] = useState([]);

  const { getAllPokemonData, getAllPokemonTypeList, getPokemonDetails } =
    usePokemon();
  const navigate = useNavigate();

  const batchSize = 5;
  const fetchPokemonBatch = async (batch) => {
    const batchData = await Promise.all(
      batch.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();
        return {
          name: pokemon.name,
          image: details.sprites.other.dream_world.front_default,
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

  useEffect(() => {
    const Ids = JSON.parse(localStorage.getItem("favouritePokemonIds"));
    if (Ids) {
      setFavouriteList(Ids);
    }
  }, []);

  const fetchPokemonById = async (id) => {
    try {
      const pokemonData = await getPokemonDetails(id);
      console.log("Got Pokémon details:", pokemonData);

      const dataOfAbility =
        pokemonData?.abilities?.map((item) => item.ability?.name) || []; 
      const nameInStats =
        pokemonData?.stats?.map((item) =>({name:item.stat.name,value:item.base_stat})) || [];
      const dataOfMoves =
        pokemonData?.moves?.map((item) => item.move.name) || [];
      const dataOfImage = pokemonData?.sprites.other.dream_world.front_default;
      const nameOfPokemon = pokemonData?.name;
     
      setAbilities(dataOfAbility);
      setStats(nameInStats);
      setMoves(dataOfMoves);
      setPokemonImage(dataOfImage);
      setPokemonName(nameOfPokemon);

      const speciesRes = await fetch(pokemonData.species.url);
      const speciesData = await speciesRes.json();
      const evoRes = await fetch(speciesData.evolution_chain.url);
      const evoData = await evoRes.json();
      const getAllSpecies = (node) => {
        // debugger;

        const names = [node.species.name];
        getSpeciesNames(node?.evolves_to, names);
        return names
      };
      const getSpeciesNames = (evolves_to, names) => {
        // debugger;
        evolves_to.forEach((evo) => {
          names.push(evo.species.name);
          if (evo?.evolves_to.length > 0) {
            getSpeciesNames(evo?.evolves_to, names);
          }
        });
      };

      const speciesList = getAllSpecies(evoData.chain);
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

  const handleToggleFavouriteIcon = (id) => {
    setFavourite((prev) => !prev);

    setFavouriteList((prev) => {
      if (prev.includes(id)) {
        const data = prev.filter((favId) => favId !== id);
        localStorage.setItem("favouritePokemonIds", JSON.stringify(data));
        return data;
      } else {
        const data = [...prev, id];
        localStorage.setItem("favouritePokemonIds", JSON.stringify(data));
        return data;
      }
    });
  };

  const handleFavouriteList = async () => {
    navigate("/favourite");
  };

  const handleDetailMoves = () =>{
    setMovesInDetail((prev)=> !prev);
  }

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
        fetchPokemonById,
        evolutionSpecies,
        abilities,
        stats,
        moves,
        movesInDetail,
        favourite,
        pokemonName,
        handleToggleFavouriteIcon,
        handleFavouriteList,
        favouriteList,
        pokemonImage,
        handleDetailMoves
      }}
    >
      {children}
    </pokemonContext.Provider>
  );
};

export default PokemonProvider;
