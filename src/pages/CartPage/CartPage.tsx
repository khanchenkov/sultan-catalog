import CartList from "../../components/CartList/CartList";
import "./CartPage.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { productSlice } from "../../store/reducers/ProductSlice";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const CartPage = () => {
  const { cart } = useAppSelector((state) => state.productReducer);
  const { clearCart } = productSlice.actions;
  const [isModalShowed, setIsModalShowed] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const sum = cart
    .map((el) => el.amount * el.item.price)
    .reduce((a, b) => a + b, 0);
  console.log(sum);

  const editPrice = (fullPrice: number) => {
    if (Number.isInteger(fullPrice)) {
      return fullPrice + " ₸";
    } else {
      return (fullPrice.toFixed(2) + "").replace(".", ",") + " ₸";
    }
  };

  const buyCartHandler = () => {
    dispatch(clearCart());
    setIsModalShowed(true);
    setTimeout(() => {
      setIsModalShowed(false);
    }, 1500);
  };

  return (
    <>
      <Header />
      <div className="cart-page">
        <Breadcrumbs routes={["Корзина"]} />
        <div className="container">
          <div className="cart-page__wrapper">
            {cart.length ? (
              <>
                <h2>Корзина</h2>
                <CartList />
                <div className="cart-page__buy">
                  <button onClick={buyCartHandler}>Оформить заказ</button>
                  <p>{editPrice(sum)}</p>
                </div>
              </>
            ) : (
              <h2>Корзина пуста</h2>
            )}
            <div className={`cart-page__modal ${isModalShowed && "show"}`}>
              <div className="cart-page__modal-content">
                <h1>Спасибо за заказ!</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
