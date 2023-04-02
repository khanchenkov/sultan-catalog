import "./CartListItem.scss";
import { FC } from "react";
import { CartItem } from "../../types/Interfaces";
import defineSize from "../../util/DefineSize";
import { useAppDispatch } from "../../hooks/redux";
import { productSlice } from "../../store/reducers/ProductSlice";

const CartListItem: FC<CartItem> = ({ item, amount }) => {
  const dispatch = useAppDispatch();
  const { increaseAmount, decreaseAmount, removefromCart } =
    productSlice.actions;
  const {
    id,
    name,
    brand_name,
    image_url,
    size,
    price,
    description,
    measurement_type,
  } = item;

  const cropName = (str: string) => {
    if (str.length <= 50) {
      return str;
    } else {
      const croppedText = str.slice(0, 50).split(" ");
      croppedText.pop();
      const newText = croppedText.join(" ");
      return newText + " ...";
    }
  };

  const editPrice = (fullPrice: number) => {
    if (Number.isInteger(fullPrice)) {
      return fullPrice + " ₸";
    } else {
      return (fullPrice.toFixed(2) + "").replace(".", ",") + " ₸";
    }
  };

  return (
    <div className="cart-list-item">
      <img src={image_url} alt={name} />
      <div className="cart-list-item__about">
        {defineSize(measurement_type, size, "cart-list-item")}
        <p className="cart-list-item__name">
          {brand_name} {cropName(name)}
        </p>
        <p className="cart-list-item__description">{description}</p>
      </div>

      <div className="cart-list-item__amount">
        <div>
          <button onClick={() => dispatch(decreaseAmount(id))}>-</button>
          <span>{amount}</span>
          <button onClick={() => dispatch(increaseAmount(id))}>+</button>
        </div>

        <p>{editPrice(price * amount)}</p>
      </div>
      <div className="cart-list-item__remove">
        <button onClick={() => dispatch(removefromCart(id))}>
          <svg
            width={19}
            height={19}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.625 3.25h4.688a.781.781 0 110 1.563h-.865L15.273 15.4a3.906 3.906 0 01-3.882 3.475H7.609A3.906 3.906 0 013.727 15.4L2.55 4.812h-.862a.781.781 0 010-1.562h4.687a3.125 3.125 0 016.25 0zM9.5 1.687A1.562 1.562 0 007.937 3.25h3.125A1.563 1.563 0 009.5 1.687zm-2.344 6.25v6.25a.781.781 0 101.563 0v-6.25a.781.781 0 00-1.563 0zm3.907-.78a.781.781 0 00-.782.78v6.25a.781.781 0 001.563 0v-6.25a.781.781 0 00-.781-.78z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartListItem;
