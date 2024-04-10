import "./index.css";

const ProductItem = (props) => {
  const { productDetails } = props;
  const { name, image, description, price } = productDetails;

  return (
    <li className="product-item">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h1 className="product-name">{name}</h1>
        <p className="product-description">{description}</p>
        <div>
          <p className="product-price">₹{price}</p>
          <button className="add-to-cart-button">Add To Cart</button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
