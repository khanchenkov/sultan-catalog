import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import "./AdminPage.scss";
import { Product } from "../../types/Interfaces";
import AdminProduct from "../../components/AdminProduct/AdminProduct";
import { productSlice } from "../../store/reducers/ProductSlice";
import AddNewProductItem from "../../components/AddNewProduct/AddNewProductItem";

const AdminPage = () => {
  const { products } = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();
  const { removeProductById, addProduct } = productSlice.actions;

  const [isAdding, setIsAdding] = useState<boolean>(false);

  const [productsList, setProductsList] = useState<Product[]>([]);
  const lsDataString: string | null = localStorage.getItem("products");
  const lsData = JSON.parse(lsDataString || "[]");

  useEffect(() => {
    setProductsList(lsData);
  }, []);

  const removeProduct = (id: number) => {
    const newArr = lsData.filter((el: Product) => el.id !== id);
    setProductsList(newArr);
    dispatch(removeProductById(id));
    localStorage.setItem("products", JSON.stringify(newArr));
  };

  const addNewProduct = (product: Product) => {
    const newArr = [product, ...productsList];
    setProductsList((state: Product[]) => [product, ...state]);
    dispatch(addProduct(product));
    localStorage.setItem("products", JSON.stringify(newArr));
    setIsAdding(false);
  };

  const editProductItem = (product: Product) => {
    const newArr = productsList.map((item) => {
      if (item.id === product.id) {
        return { ...product };
      }
      return item;
    });
    setProductsList(newArr);
    localStorage.setItem("products", JSON.stringify(newArr));
  };

  return (
    <div className="admin-page">
      <div className="container">
        <header className="admin-page__header">
          <Link to="/">Вернуться на сайт</Link>
        </header>
        <div className="admin-page__wrapper">
          <div className="admin-page__heading">
            <h1>Список продуктов</h1>
            <button onClick={() => setIsAdding(!isAdding)}>
              Добавить новый продукт
            </button>
          </div>
          <div className={`admin-page__add ${isAdding ? "show" : ""}`}>
            <AddNewProductItem
              addNewProduct={addNewProduct}
              lastId={productsList.length}
            />
          </div>
          <ul>
            {productsList.map((item: Product) => (
              <AdminProduct
                key={item.id}
                item={item}
                removeProduct={removeProduct}
                editProductItem={editProductItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
