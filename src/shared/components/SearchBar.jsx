import React from "react";
import { TextField } from "@mui/material";
import { useContext } from "react";
import { pokemonContext } from "../../PokemonContextProvider/PokemonContextProvider";
const SearchBar = () => {
  const { handlePokemonSearch, searchText } = useContext(pokemonContext);

  const searchTextField = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "1rem",
      "& fieldset": {
        borderColor: "darkgreen",
        borderWidth: "3px"
      },
      "&:hover fieldset": {
        borderColor: "darkgreen",
        
      },
      "&.Mui-focused fieldset": {
        borderColor: "darkgreen",
      },
    },
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      size="small"
      sx={{ width: "30rem", ...searchTextField}}
      value={searchText}
      onChange={handlePokemonSearch}
    />
  );
};

export default SearchBar;
