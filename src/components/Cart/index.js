import Popup from "reactjs-popup";

import "./index.css";

import CommonLayout from "../CommonLayout";
import EmptyCartView from "./EmptyCartView";
import CartContext from "../../Context/cartContext";
import CartItem from "./CartItem";

const renderCheckoutPopup = () => {
  return (
    <Popup
      trigger={<button className="checkout-button">CHECKOUT</button>}
      modal
    >
      {(close) => {
        return (
          <div className="checkout-popup">
            <div className="checkout-container">
              <h1 className="checkout-msg">PLEASE PROVIDE YOUR ADDRESS</h1>
              <textarea rows={16} className="address-input"></textarea>
              <div className="checkout-options-container">
                <button
                  type="button"
                  className="checkout-options"
                  onClick={close}
                >
                  Cancel
                </button>
                <button className="checkout-options" onClick={close}>
                  Save
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </Popup>
  );
};

const Cart = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartItems } = value;
      const showEmptyView = cartItems.length === 0;

      const totalAmount = cartItems.reduce(
        (accumulator, cartItemDetails) => accumulator + cartItemDetails.price,
        0
      );

      return (
        <CommonLayout>
          {showEmptyView ? (
            <EmptyCartView />
          ) : (
            <div className="cart">
              <div className="cart-width-container">
                <div className="cart-header-container">
                  <h1 className="total-amount">TOTAL: ₹{totalAmount}</h1>
                  {renderCheckoutPopup()}
                </div>
                <ul className="cart-items">
                  {cartItems.map((cartItemDetails) => (
                    <CartItem
                      key={cartItemDetails.name}
                      cartItemDetails={cartItemDetails}
                    />
                  ))}
                </ul>
              </div>
            </div>
          )}
        </CommonLayout>
      );
    }}
  </CartContext.Consumer>
);

export default Cart;
