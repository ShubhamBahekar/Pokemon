import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
import { pokemonContext } from "../../../PokemonContextProvider/PokemonContextProvider";

const SearchBar = () => {
  const {
    pokemonType,
    handleTypeChange,
    selectedType,
    handlePokemonSearch,
    searchText,
  } = useContext(pokemonContext);

  const searchTextField = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "1rem",
      "& fieldset": {
        borderColor: "green",
      },
      "&:hover fieldset": {
        borderColor: "darkgreen",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  };

  const selectDropDown = {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "green",
      borderRadius: "1rem",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "darkgreen",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "green",
    },
  };

  return (
    <Box sx={{ marginTop: "1rem" }}>
      <Stack
        direction={"row"}
        justifyContent="center"
        spacing={2}
        padding={"0.2rem"}
      >
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          sx={{ width: "30rem", ...searchTextField }}
          value={searchText}
          onChange={handlePokemonSearch}
        />

        <FormControl sx={{ width: "10rem" }} size="small">
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Filter"
            onChange={handleTypeChange}
            value={selectedType || ""}
            sx={{ ...selectDropDown }}
          >
            {pokemonType.map((type) => (
              <MenuItem value={type || ""} key={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default SearchBar;
