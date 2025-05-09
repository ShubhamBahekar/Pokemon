import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
import { pokemonContext } from "../../PokemonContextProvider/PokemonContextProvider";
const Filter = () => {
  const { pokemonType, handleTypeChange, selectedType } =
    useContext(pokemonContext);

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
  );
};

export default Filter;
