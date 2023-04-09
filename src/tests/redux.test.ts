import { productSlice } from "./../store/reducers/ProductSlice";
import { setupStore } from "../store/store";
import { CartItem } from "../types/Interfaces";
import data from "../data/data.json";

const store = setupStore();
const { addToCart, clearCart, productsFetchingSuccess } = productSlice.actions;

const mockDataLength: number = data.length;
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

test("Fetching items to redux state", () => {
  let state = store.getState().productReducer;
  store.dispatch(productsFetchingSuccess(data));
  state = store.getState().productReducer;
  expect(state.products.length).toBe(mockDataLength);
});

test("Adds item to cart", () => {
  let state = store.getState().productReducer;
  const intialCartCount = state.cart.length;

  store.dispatch(addToCart(mockProduct));
  state = store.getState().productReducer;

  const newlyAddedProduct = state.cart.find(
    (product: CartItem) => product.product_id === mockProduct.id
  );
  expect(newlyAddedProduct?.amount).toBe(1);
  expect(newlyAddedProduct?.item).toBe(mockProduct);

  expect(state.cart.length).toBeGreaterThan(intialCartCount);
});

test("removes items from cart", () => {
  let state = store.getState().productReducer;
  store.dispatch(addToCart(mockProduct));
  const intialCartCount = state.cart.length;

  store.dispatch(clearCart());
  state = store.getState().productReducer;
  expect(state.cart.length).toBeLessThan(intialCartCount);
});
