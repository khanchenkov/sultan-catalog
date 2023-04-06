import { useParams } from "react-router-dom";
import "./ProductPage.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { productSlice } from "../../store/reducers/ProductSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { Product } from "../../types/Interfaces";
import defineSize from "../../components/MeasurementIcon/MeasurementIcon";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { editPrice } from "../../util/EditPrice";

const ProductPage = () => {
  const { barcode } = useParams();
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productReducer);
  const { decreaseAmount, addToCart } = productSlice.actions;
  const [isDescShown, setIsDescShown] = useState<boolean>(false);
  const [isCharsShown, setIsCharShown] = useState<boolean>(false);
  const descClasslist = isDescShown
    ? "product-page__description active"
    : "product-page__description";
  const charClasslist = isCharsShown
    ? "product-page__chars active"
    : "product-page__chars";

  const currentProduct = products.find((el: Product) => el.barcode === barcode);

  const [amount, setAmount] = useState(0);

  const addToCartHandler = () => {
    setAmount((state) => state + 1);
    dispatch(addToCart(currentProduct!));
  };

  const decreaseHandler = () => {
    setAmount((state) => state - 1);
    dispatch(decreaseAmount(currentProduct!.id));
  };

  return (
    <>
      <Header />
      <div className="product-page">
        <Breadcrumbs
          routes={[
            "Каталог",
            `${currentProduct?.brand_name} ${currentProduct?.name}`,
          ]}
        />
        <div className="container">
          <div className="product-page__wrapper">
            <div className="product-page__image">
              <img src={currentProduct?.image_url} alt={currentProduct?.name} />
            </div>

            <div className="product-page__text">
              <div className="product-page__about">
                <span>В наличии</span>
                <p className="product-page__name">
                  <strong>{currentProduct?.brand_name}</strong>{" "}
                  {currentProduct?.name}
                </p>
                {defineSize(
                  currentProduct?.measurement_type,
                  currentProduct?.size,
                  "product-page"
                )}
                <div className="product-page__buy">
                  <p>
                    {amount > 0 &&
                      currentProduct &&
                      editPrice(amount * currentProduct.price)}
                    {amount < 1 &&
                      currentProduct &&
                      editPrice(currentProduct.price)}
                  </p>
                  <div
                    className={`product-page__amount ${
                      amount > 0 ? "show" : ""
                    }`}
                  >
                    <button onClick={decreaseHandler}>-</button>
                    <span>{amount}</span>
                    <button onClick={addToCartHandler}>+</button>
                  </div>
                  <button onClick={addToCartHandler}>
                    В корзину
                    <svg
                      width={21}
                      height={15}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.326 2.893a.611.611 0 00-.523-.272H5.878L5.5 1.637A2.744 2.744 0 005.11.81C4.946.582 4.772.42 4.587.326a2.312 2.312 0 00-.482-.191 1.713 1.713 0 00-.41-.05H.885A.622.622 0 00.25.73c.001.107.028.211.083.312.055.1.133.178.236.232.102.054.208.08.318.08h2.81c.054 0 .105.007.153.02.048.014.113.071.195.172.082.101.15.252.205.454l2.941 8.076a.729.729 0 00.35.404c.081.04.17.06.266.06h8.859c.137 0 .263-.04.38-.12a.598.598 0 00.235-.303l3.138-6.63a.638.638 0 00-.092-.594zM16.214 9.25H8.318L6.227 3.91h12.632L16.214 9.25zm-1.183 1.99c-.45 0-.837.158-1.158.474a1.54 1.54 0 00-.482 1.139c0 .443.16.823.482 1.139.32.316.707.474 1.158.474.451 0 .838-.158 1.159-.474a1.54 1.54 0 00.482-1.14c0-.443-.16-.823-.482-1.138a1.593 1.593 0 00-1.159-.474zm-5.906 0c-.3 0-.578.074-.83.222a1.639 1.639 0 00-.595.584 1.55 1.55 0 00-.216.807c0 .443.161.823.482 1.139.322.316.708.474 1.159.474.451 0 .837-.158 1.159-.474a1.54 1.54 0 00.482-1.14c0-.107-.01-.214-.031-.322a1.42 1.42 0 00-.246-.574 1.765 1.765 0 00-.451-.444 1.48 1.48 0 00-.584-.242c-.11-.02-.22-.03-.329-.03z"
                        fill="#fff"
                      />
                    </svg>
                  </button>
                </div>

                <div className="product-page__share">
                  <button>
                    <svg
                      width={20}
                      height={21}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 13.5a3.478 3.478 0 002.357-.93l6.26 3.577a3.52 3.52 0 101.026-1.717l-6.26-3.577c.066-.25.102-.509.108-.768l6.15-3.515A3.49 3.49 0 1012.5 4c.004.288.043.575.117.853L6.933 8.1A3.5 3.5 0 104 13.5z"
                        fill="#FFC85E"
                      />
                    </svg>
                  </button>
                  <p>
                    При покупке от <b>10 000 ₸</b> бесплатная доставка по
                    Кокчетаву и области
                  </p>
                  <div className="product-page__price-list">
                    <button>
                      Прайс-лист
                      <svg
                        width={12}
                        height={13}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.958 4.375H8.125V.125h-4.25v4.25H1.04L6 10.042l4.958-5.667zM.333 11.458h11.333v1.417H.333v-1.417z"
                          fill="#3F4E65"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-page__info">
                <p>
                  Производитель: <b>{currentProduct?.manufacturer}</b>
                </p>
                <p>
                  Бренд: <b>{currentProduct?.brand_name}</b>
                </p>
                <p>
                  Артикул: <b>460404</b>
                </p>
                <p>
                  Штрихкод: <b>{currentProduct?.barcode}</b>
                </p>
              </div>

              <div className={descClasslist}>
                <button onClick={() => setIsDescShown(!isDescShown)}>
                  Описание
                </button>
                <p>{currentProduct?.description}</p>
              </div>

              <div className={charClasslist}>
                <button onClick={() => setIsCharShown(!isCharsShown)}>
                  Характеристики
                </button>
                <div>
                  <p>
                    Назначение: <b>{currentProduct?.care_type.join(", ")}</b>
                  </p>
                  <p>
                    Тип: <b>{currentProduct?.brand_name}</b>
                  </p>
                  <p>
                    Производитель: <b>{currentProduct?.manufacturer}</b>
                  </p>
                  <p>
                    Бренд: <b>{currentProduct?.brand_name}</b>
                  </p>
                  <p>
                    Артикул: <b>460404</b>
                  </p>
                  <p>
                    Штрихкод: <b>{currentProduct?.barcode}</b>
                  </p>
                  <p>
                    Вес: <b>{currentProduct?.size}</b>
                  </p>
                  <p>
                    Объем: <b>{currentProduct?.size}</b>
                  </p>
                  <p>
                    Кол-во в коробеке: <b>{currentProduct?.size}</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
