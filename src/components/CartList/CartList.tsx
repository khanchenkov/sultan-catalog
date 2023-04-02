import { useAppSelector } from "../../hooks/redux";
import CartListItem from "../CartListItem/CartListItem";
import { CartItem } from "../../types/Interfaces";

const CartList = () => {
  const { cart } = useAppSelector((state) => state.productReducer);

  return (
    <div className="cart-list">
      {cart &&
        cart.map((item: CartItem) => <CartListItem key={item.product_id} {...item} />)}
    </div>
  );
};

export default CartList;
