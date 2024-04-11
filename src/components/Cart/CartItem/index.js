import CartContext from "../../../Context/cartContext";
import "./index.css";

import Popup from "reactjs-popup";

const renderDeleteProductView = (name) => {
  return (
    <CartContext.Consumer>
      {(value) => {
        const { removeCartItem } = value;
        const onClickDeleteProduct = () => {
          removeCartItem(name);
        };

        return (
          <Popup
            trigger={<button className="delete-product">Delete</button>}
            modal
          >
            {(close) => {
              return (
                <div className="delete-product-popup">
                  <div className="delete-warning-container">
                    <h1 className="delete-warning-msg">
                      Delete Product From Cart?
                    </h1>
                    <div className="delete-product-options">
                      <button
                        type="button"
                        className="popup-options"
                        onClick={close}
                      >
                        Cancel
                      </button>
                      <button
                        className="popup-options"
                        onClick={onClickDeleteProduct}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            }}
          </Popup>
        );
      }}
    </CartContext.Consumer>
  );
};

const CartItem = (props) => {
  const { cartItemDetails } = props;
  const { name, price } = cartItemDetails;
  return (
    <>
      <hr />
      <li className="cart-product">
        <div className="cart-product-details">
          <h1 className="cart-product-name">{name}</h1>
          <p className="cart-product-price">
            Price : <span className="cart-product-price-span">{price}</span>
          </p>
        </div>
        {renderDeleteProductView(name)}
      </li>
    </>
  );
};

export default CartItem;
