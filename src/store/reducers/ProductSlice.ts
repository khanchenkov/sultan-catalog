import { Product, CartItem } from "./../../types/Interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  products: Product[];
  cart: CartItem[];
  cartSum: number;
  careTypes: string[];
}

const initialState: ProductState = {
  products: [],
  cart: [],
  cartSum: 0,
  careTypes: [
    "Уход за телом",
    "Уход за руками",
    "Уход за ногами",
    "Уход за лицом",
    "Уход за волосами",
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productsFetchingSuccess(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    removeProductById(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.products = [action.payload, ...state.products];
    },
    addToCart(state, action: PayloadAction<Product>) {
      const findEl = state.cart.filter(
        (el) => el.product_id === action.payload.id
      );

      if (findEl.length) {
        findEl[0].amount += 1;
      } else {
        const newCartItem = {
          product_id: action.payload.id,
          amount: 1,
          item: action.payload,
        };
        state.cart.push(newCartItem);
      }
      state.cartSum = state.cart
        .map((el) => el.amount * el.item.price)
        .reduce((a, b) => a + b, 0);
    },
    increaseAmount(state, action: PayloadAction<number>) {
      const el = state.cart.find((el) => el.product_id === action.payload);
      el!.amount += 1;
      state.cartSum = state.cart
        .map((el) => el.amount * el.item.price)
        .reduce((a, b) => a + b, 0);
    },
    decreaseAmount(state, action: PayloadAction<number>) {
      const el = state.cart.find((el) => el.product_id === action.payload);
      el!.amount -= 1;

      if (el!.amount === 0) {
        state.cart = state.cart.filter(
          (el) => el.product_id !== action.payload
        );
      }

      state.cartSum = state.cart
        .map((el) => el.amount * el.item.price)
        .reduce((a, b) => a + b, 0);
    },
    removefromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((el) => el.product_id !== action.payload);
      state.cartSum = state.cart
        .map((el) => el.amount * el.item.price)
        .reduce((a, b) => a + b, 0);
    },
    clearCart(state) {
      state.cart = [];
      state.cartSum = state.cart
        .map((el) => el.amount * el.item.price)
        .reduce((a, b) => a + b, 0);
    },
    sortByName(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case "asc":
          state.products = state.products.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
          break;
        case "desc":
          state.products = state.products
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
            .reverse();
          break;
        case "":
        default:
          state.products = state.products.sort((a, b) => a.id - b.id);
      }
    },
    sortByPrice(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case "asc":
          state.products = state.products.sort((a, b) => a.price - b.price);
          break;
        case "desc":
          state.products = state.products
            .sort((a, b) => a.price - b.price)
            .reverse();
          break;
        case "":
        default:
          state.products = state.products.sort((a, b) => a.id - b.id);
      }
    },
    filterByCareType(state, action: PayloadAction<string>) {
      state.products = state.products.filter((el) =>
        el.care_type.includes(action.payload)
      );
    },
  },
});

export default productSlice.reducer;
