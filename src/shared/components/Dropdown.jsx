
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const FilterByType = ({
  label,
  value,
  onChange,
  options = [],
  sx = {},
  width = "10rem",
  size = "small",
}) => {
  return (
    <FormControl sx={{ width, ...sx }} size={size}>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        id={`${label}-select`}
        label={label}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem value={option || ""} key={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterByType;
