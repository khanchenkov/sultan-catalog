import { useAppSelector } from "../../hooks/redux";
import CartListItem from "../CartListItem/CartListItem";
import { CartItem } from "../../types/Interfaces";

const CartList = () => {
  const { cart } = useAppSelector((state) => state.productReducer);

  console.log(cart);

  return (
    <div className="cart-list" data-testid="cart-list">
      {cart &&
        cart.map((item: CartItem) => (
          <CartListItem key={item.product_id} {...item} />
        ))}
    </div>
  );
};

export default CartList;
