import { useContext } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { ProvinceContext } from "../../contexts/ProvinceProvider";
import { INITIAL_VIEWPORT } from "../../constants";

function ProvinceList() {
  const { data, error, handleSelectProvince, handleChange } = useContext(ProvinceContext);

  const handleClear = () => {
    handleChange("");
    handleSelectProvince({
      centroide: {
        lat: INITIAL_VIEWPORT.latitude,
        lon: INITIAL_VIEWPORT.longitude,
      },
      nombre: "",
      zoom: INITIAL_VIEWPORT.zoom,
    });
  };

  return (
    <>
      {error && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom color="red">
            Error al cargar los datos. Por favor, inténtelo de nuevo.
          </Typography>
        </Box>
      )}
      <Grid container alignItems="center">
        <Grid item xs={10}>
          <Typography variant="h5" component="h2">
            Resultados de búsqueda
          </Typography>
        </Grid>
        {data?.provincias.length > 0 && (
          <Grid item xs>
            <Button variant="contained" color="secondary" onClick={handleClear}>
              ❌
            </Button>
          </Grid>
        )}
      </Grid>
      <List>
        {data?.provincias?.map((province) => (
          <ListItemButton key={province.id} onClick={() => handleSelectProvince(province)}>
            <ListItemText
              primary={province.nombre}
              secondary={`Latitud:${province.centroide.lat}, Longitud:${province.centroide.lon}`}
            />
          </ListItemButton>
        ))}
      </List>
    </>
  );
}

export default ProvinceList;
