import { createContext, useState } from "react";
import { API_URL } from "../constants";
import { useDataFetcher } from "../hooks";

export const ProvinceContext = createContext();

const ProvinceProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [selectedProvince, setSelectedProvince] = useState(null);
  const { data, error } = useDataFetcher(API_URL, value);

  const handleChange = (value) => {
    setValue(value);
  };

  const handleSelectProvince = (province) => {
    if (!province) {
      setSelectedProvince(null);
      return;
    }
    setSelectedProvince({
      lat: province.centroide.lat,
      lon: province.centroide.lon,
      name: province.nombre,
      zoom: province.zoom,
    });
  };

  return (
    <ProvinceContext.Provider
      value={{
        value,
        handleChange,
        selectedProvince,
        handleSelectProvince,
        data,
        error,
      }}
    >
      {children}
    </ProvinceContext.Provider>
  );
};

export default ProvinceProvider;
