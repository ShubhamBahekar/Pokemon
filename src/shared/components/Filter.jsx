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
    borderColor: "white",
    borderRadius: "1rem",
    borderWidth: "3px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "white",
  },
  "& .MuiSvgIcon-root": {
    color: "white",
  }
};


  return (
    <FormControl sx={{ width: "10rem",...selectDropDown }} size="small">
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
