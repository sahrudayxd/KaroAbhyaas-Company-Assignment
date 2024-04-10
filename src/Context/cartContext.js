import { createContext } from "react";

const CartContext = createContext({
  cartItems: [],
  addCartItem: () => {},
  removeCartItem: () => {},
});

export default CartContext;
