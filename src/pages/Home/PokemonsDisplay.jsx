import Header from "../../Header/Header";
import SearchBar from "./Components/SearchBar";
import PokemonCard from "./Components/PaginationAndCard";
import CircularProgress from "@mui/material/CircularProgress";
import { pokemonContext } from "../../PokemonContextProvider/PokemonContextProvider";
import { useContext } from "react";
import { Box } from "@mui/material";
const PokemonsDisplay = () => {
  const { loading } = useContext(pokemonContext);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: "white",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Header />
          <SearchBar />
          <PokemonCard />
        </>
      )}
    </>
  );
};

export default PokemonsDisplay;
