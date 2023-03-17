import { useState, useEffect } from "react";
import { INITIAL_VIEWPORT } from "../constants";

const useViewport = (selectedProvince) => {
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);

  useEffect(() => {
    if (selectedProvince) {
      setViewport({
        latitude: selectedProvince.lat,
        longitude: selectedProvince.lon,
        zoom: selectedProvince.zoom || 5,
      });
    }
  }, [selectedProvince]);

  return { viewport, setViewport };
};

export default useViewport;
