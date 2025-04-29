import Header from "../Header/Header";
 import SearchBar from "./Body/SearchBar";
 import PokemonCard from "./Body/PokenCard";
 import CircularProgress from '@mui/material/CircularProgress';
import { pokemonContext } from "./PokemonProvider";
import { useContext } from "react";
import { Box } from "@mui/material";
 const Home = () => {

  const {loading} = useContext(pokemonContext);

  return (
    <>
    {loading? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", // takes full viewport height
            width: "100vw",  // takes full viewport width
            backgroundColor: "#f9f9f9", // optional, for visual clarity
          }}
        >
          <CircularProgress />
        </Box>
      ) :(<><Header />
       <SearchBar />
     <PokemonCard/></>)}
    </>
  );
};

export default Home;
