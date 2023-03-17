import { TextField } from "@mui/material";
import { useContext } from "react";
import { ProvinceContext } from "../../contexts/ProvinceProvider";

function Search() {
  const { value, handleChange } = useContext(ProvinceContext);

  return (
    <TextField
      id="outlined-basic"
      label="Buscar provincia"
      variant="outlined"
      value={value}
      onChange={(event) => handleChange(event.target.value)}
      fullWidth
    />
  );
}

export default Search;
