import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductListItem.scss";
import { Product } from "../../types/Interfaces";
import { useAppDispatch } from "../../hooks/redux";
import { productSlice } from "../../store/reducers/ProductSlice";
import defineSize from "../../util/DefineSize";
import { editPrice } from "../../util/EditPrice";

const ProductListItem: FC<Product> = (item) => {
  const navigate = useNavigate();
  const { addToCart } = productSlice.actions;
  const dispatch = useAppDispatch();
  const {
    name,
    brand_name,
    image_url,
    barcode,
    manufacturer,
    size,
    price,
    measurement_type,
    care_type,
  } = item;

  return (
    <div className="product-list-item">
      <div className="product-list-item__image">
        <img src={image_url} alt={name} />
      </div>
      {defineSize(measurement_type, size, "product-list-item")}
      <p
        className="product-list-item__name"
        onClick={() => navigate(`/product/${barcode}`)}
      >
        <strong>{brand_name}</strong> {name}
      </p>
      <div className="product-list-item__chars">
        <p>
          Штрихкод: <b>{barcode}</b>
        </p>
        <p>
          Производитель: <b>{manufacturer}</b>
        </p>
        <p>
          Бренд: <b>{brand_name}</b>
        </p>
        <p>
          Тип ухода: <b>{care_type.join(", ")}</b>
        </p>
      </div>
      <div className="product-list-item__buy">
        <p>{editPrice(price)}</p>
        <button onClick={() => dispatch(addToCart(item))}>
          В корзину
          <svg
            width={25}
            height={18}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.448 4.092a.718.718 0 00-.614-.32H7.487l-.443-1.154a3.221 3.221 0 00-.458-.97c-.192-.269-.397-.458-.614-.569a2.714 2.714 0 00-.566-.225 2.01 2.01 0 00-.481-.059H1.627a.73.73 0 00-.746.757.76.76 0 00.096.367c.064.119.156.21.277.273.12.063.244.094.373.094h3.298c.064 0 .124.008.18.024.057.016.133.083.23.201.096.118.176.296.24.533l3.453 9.48a.855.855 0 00.41.474.7.7 0 00.312.071h10.4c.16 0 .31-.047.446-.142a.703.703 0 00.277-.355l3.683-7.782a.75.75 0 00-.108-.698zm-4.827 7.463h-9.269L7.896 5.287h14.83l-3.105 6.268zm-1.389 2.335c-.53 0-.983.186-1.36.557-.377.37-.566.816-.566 1.337 0 .52.189.966.566 1.337.377.371.83.556 1.36.556.53 0 .983-.185 1.36-.556.378-.37.566-.816.566-1.337 0-.52-.188-.966-.565-1.337a1.87 1.87 0 00-1.36-.556zm-6.933 0c-.353 0-.678.087-.975.26-.297.175-.53.403-.698.687a1.82 1.82 0 00-.253.947c0 .52.189.966.566 1.337.377.371.83.556 1.36.556.53 0 .983-.185 1.36-.556.377-.37.566-.816.566-1.337 0-.126-.012-.253-.036-.379a1.67 1.67 0 00-.29-.674 2.065 2.065 0 00-.529-.52 1.732 1.732 0 00-.686-.284 2.118 2.118 0 00-.385-.037z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductListItem;
