import * as React from "react";
import { Box } from "@mui/material";
import { useContext } from "react";
import { pokemonContext } from "../../../PokemonContextProvider/PokemonContextProvider";
import PokemonCard from "../../../shared/components/Card";
import Pagination from "../../../shared/components/Pagination";


const PokemonLandingPage = () => {
  const { filterPokemonData,fetchPokemonByName } = useContext(pokemonContext);
    

  return (
    <Box display={"flex"} flexDirection={"row"} width={"100%"} height={"auto"}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-around"}
        width={"100%"}
        flexWrap={"wrap"}
        marginTop={2}
      >
        <Pagination
          data={filterPokemonData}
          renderItem={(pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={()=>fetchPokemonByName(pokemon.name)}/>
          )}
          label="Pokemons per page:"
        />
      </Box>
    </Box>
  );
};

export default PokemonLandingPage;
