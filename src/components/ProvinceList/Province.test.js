import { render, screen } from "@testing-library/react";
import { ProvinceContext } from "../../contexts/ProvinceProvider";
import ProvinceList from "./ProvinceList";

describe("ProvinceList", () => {
  test("renders without error", () => {
    render(
      <ProvinceContext.Provider value={{ data: { provincias: [] }, error: null }}>
        <ProvinceList />
      </ProvinceContext.Provider>
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  const provincias = [
    {
      id: "01",
      nombre: "Buenos Aires",
      centroide: { lat: -36.6769, lon: -56.6745 },
    },
    {
      id: "02",
      nombre: "Córdoba",
      centroide: { lat: -31.4025, lon: -64.1859 },
    },
  ];

  test("renders the list of provinces correctly", () => {
    render(
      <ProvinceContext.Provider value={{ data: { provincias }, error: null }}>
        <ProvinceList />
      </ProvinceContext.Provider>
    );

    const buenosAiresProvince = screen.getByText("Buenos Aires");
    const cordobaProvince = screen.getByText("Córdoba");
    expect(buenosAiresProvince).toBeInTheDocument();
    expect(cordobaProvince).toBeInTheDocument();

    const buenosAiresSecondaryText = screen.getByText("Latitud:-36.6769, Longitud:-56.6745");
    const cordobaSecondaryText = screen.getByText("Latitud:-31.4025, Longitud:-64.1859");
    expect(buenosAiresSecondaryText).toBeInTheDocument();
    expect(cordobaSecondaryText).toBeInTheDocument();
  });
});
