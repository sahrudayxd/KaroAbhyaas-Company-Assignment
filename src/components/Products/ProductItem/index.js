import CartContext from "../../../Context/cartContext";
import "./index.css";

const ProductItem = (props) => {
  const { productDetails } = props;
  const { name, image, description, price } = productDetails;

  return (
    <CartContext.Consumer>
      {(value) => {
        const { addCartItem, removeCartItem, cartItems } = value;

        const onClickAddToCart = () => {
          addCartItem({ name, description, price });
        };

        const onClickRemoveFromCart = () => {
          removeCartItem(name);
        };

        const isProductICart = cartItems.find(
          (cartItem) => cartItem.name === name
        );

        return (
          <li className="product-item">
            <img src={image} alt={name} className="product-image" />
            <div className="product-details">
              <h1 className="product-name">{name}</h1>
              <p className="product-description">{description}</p>
              <div>
                <p className="product-price">₹{price}</p>
                {isProductICart ? (
                  <button
                    className="remove-from-cart-button"
                    onClick={onClickRemoveFromCart}
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    className="add-to-cart-button"
                    onClick={onClickAddToCart}
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          </li>
        );
      }}
    </CartContext.Consumer>
  );
};

export default ProductItem;
