import "./CategorySort.scss";
import { useAppDispatch } from "../../hooks/redux";
import { productSlice } from "../../store/reducers/ProductSlice";
import { useState, useEffect } from "react";

const CategorySort = () => {
  const dispatch = useAppDispatch();
  const { sortByName, sortByPrice } = productSlice.actions;

  const [currentNameSort, setCurrentNameSort] = useState<string>("");
  const [currentPriceSort, setCurrentPriceSort] = useState<string>("");
  const nameBtnClass = currentNameSort ? `${currentNameSort} active` : "";
  const priceBtnClass = currentPriceSort ? `${currentPriceSort} active` : "";

  const sortByNameHandler = () => {
    switch (currentNameSort) {
      case "":
        setCurrentNameSort("desc");
        break;
      case "desc":
        setCurrentNameSort("asc");
        break;
      case "asc":
      default:
        setCurrentNameSort("");
        break;
    }
  };

  const sortByPriceHandler = () => {
    switch (currentPriceSort) {
      case "":
        setCurrentPriceSort("desc");
        break;
      case "desc":
        setCurrentPriceSort("asc");
        break;
      case "asc":
      default:
        setCurrentPriceSort("");
        break;
    }
  };

  useEffect(() => {
    dispatch(sortByName(currentNameSort));
  }, [currentNameSort, sortByName, dispatch]);

  useEffect(() => {
    dispatch(sortByPrice(currentPriceSort));
  }, [dispatch, currentPriceSort, sortByPrice]);

  return (
    <div className="category-sort">
      <div className="container">
        <div className="category-sort__wrapper">
          <h2>Косметика и гигиена</h2>
          <div className="category-sort__sorting">
            <span>Сортировка:</span>
            <button className={nameBtnClass} onClick={sortByNameHandler}>
              Название
            </button>
            <button className={priceBtnClass} onClick={sortByPriceHandler}>
              Цена
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySort;
