import { useContext } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Typography from "@mui/material/Typography";

import { ProvinceContext } from "../../contexts/ProvinceProvider";
import { MAP_BOX_API_KEY, MAP_BOX_STYLE } from "../../constants";
import { useViewPort } from "../../hooks";

function Map() {
  const { selectedProvince } = useContext(ProvinceContext);
  const { viewport, setViewport } = useViewPort(selectedProvince);

  return (
    <ReactMapGL
      initialViewState={viewport}
      style={{ width: "100%", height: 400 }}
      mapStyle={MAP_BOX_STYLE}
      mapboxAccessToken={MAP_BOX_API_KEY}
      {...viewport}
      onMove={({ viewState }) => setViewport(viewState)}
    >
      <NavigationControl label="Map navigation" />
      {selectedProvince && (
        <Marker latitude={selectedProvince.lat} longitude={selectedProvince.lon}>
          <Typography
            role="img"
            aria-label="push-pin"
            sx={{
              color: "white",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              animation: "bounce 1s infinite",
              "@keyframes bounce": {
                "0%, 100%": {
                  transform: "translateY(0)",
                },
                "50%": {
                  transform: "translateY(-10px)",
                },
              },
            }}
          >
            📌 {selectedProvince.name}
          </Typography>
        </Marker>
      )}
    </ReactMapGL>
  );
}

export default Map;
