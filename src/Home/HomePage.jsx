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
            height: "100vh", 
            width: "100vw",  
            backgroundColor: "white", 
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
