import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Map from "./components/Map";
import Header from "./components/Header";
import ProvinceProvider from "./contexts/ProvinceProvider";
import ProvinceList from "./components/ProvinceList";
import Search from "./components/Search";

function App() {
  return (
    <ProvinceProvider>
      <Header />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Explora la ubicación de todas las provincias argentinas
          </Typography>
          <Search />
          <Box sx={{ mt: 4 }}>
            <ProvinceList />
          </Box>
          <Map />
        </Box>
      </Container>
    </ProvinceProvider>
  );
}

export default App;

