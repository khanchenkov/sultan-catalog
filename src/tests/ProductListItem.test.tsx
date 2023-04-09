import ProductListItem from "../components/ProductListItem/ProductListItem";
import * as reactRedux from "react-redux";
import { productSlice } from "../store/reducers/ProductSlice";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
const { addToCart } = productSlice.actions;

jest.mock("react-redux");

const mockProduct = {
  id: 23,
  name: "Средство для мытья посуды Crystal",
  brand_name: "AOS",
  image_url: "https://ir.ozone.ru/s3/multimedia-2/wc250/6247507310.jpg",
  measurement_type: "volume",
  size: "450",
  barcode: "4604049097610",
  manufacturer: "Grifon",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
  price: 48.76,
  care_type: ["Уход за лицом", "Уход за руками"],
};

const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

describe("Product item", () => {
  it("Should dispatch add to cart", () => {
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);

    render(
      <BrowserRouter>
        <ProductListItem {...mockProduct} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(dispatch).toHaveBeenCalled();
  });
});
