import ProductList from "../components/ProductList/ProductList";
import { render } from "@testing-library/react";
import * as reactRedux from "react-redux";
import { BrowserRouter } from "react-router-dom";
import data from "../data/data.json";

jest.mock("react-redux");

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

describe("Renders ProductList", () => {
  it("Renders empty product list", () => {
    useSelectorMock.mockReturnValue([]);

    const view = render(
      <BrowserRouter>
        <ProductList products={[]} />
      </BrowserRouter>
    );

    expect(view).toMatchSnapshot();
  });

  it("Renders product list with items", () => {
    
    useSelectorMock.mockReturnValue(data);

    const view = render(
      <BrowserRouter>
        <ProductList products={data} />
      </BrowserRouter>
    );

    expect(view).toMatchSnapshot();
  });
});
