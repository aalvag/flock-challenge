import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";
import { ProvinceContext } from "../../contexts/ProvinceProvider";

describe("Search", () => {
  test("renders without error", () => {
    render(
      <ProvinceContext.Provider value={{ value: "", handleChange: () => {} }}>
        <Search />
      </ProvinceContext.Provider>
    );
    const searchElement = screen.getByLabelText("Buscar provincia");
    expect(searchElement).toBeInTheDocument();
  });

  test("calls handleChange on TextField value change", () => {
    const mockHandleChange = jest.fn();
    render(
      <ProvinceContext.Provider value={{ value: "", handleChange: mockHandleChange }}>
        <Search />
      </ProvinceContext.Provider>
    );
    const searchElement = screen.getByLabelText("Buscar provincia");
    fireEvent.change(searchElement, { target: { value: "Buenos Aires" } });
    expect(mockHandleChange).toHaveBeenCalled();
  });

  test("displays the correct value in the TextField", () => {
    const mockValue = "Córdoba";
    render(
      <ProvinceContext.Provider value={{ value: mockValue, handleChange: () => {} }}>
        <Search />
      </ProvinceContext.Provider>
    );
    const searchElement = screen.getByLabelText("Buscar provincia");
    expect(searchElement).toHaveValue(mockValue);
  });
});
//
