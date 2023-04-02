import Pages from "./pages";
import { useEffect } from "react";
import data from "./data/data.json";
import { productSlice } from "./store/reducers/ProductSlice";
import { useAppDispatch } from "./hooks/redux";
import { Product } from "./types/Interfaces";

const App = () => {
  const { productsFetchingSuccess } = productSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const lsDataString: string | null = localStorage.getItem("products");
    if (lsDataString === null) {
      localStorage.setItem("products", JSON.stringify(data));
      dispatch(productsFetchingSuccess(data));
    }
    if (lsDataString === "[]") {
      dispatch(productsFetchingSuccess(data));
    } else {
      const parsedFromLS: Product[] = JSON.parse(
        localStorage.getItem("products") || "[]"
      );
      dispatch(productsFetchingSuccess(parsedFromLS));
    }
  }, [dispatch, productsFetchingSuccess]);

  return (
    <>
      <Pages />
    </>
  );
};

export default App;
