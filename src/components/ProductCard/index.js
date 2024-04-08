import { RiHeart3Line } from "react-icons/ri";
import "./index.css";

const ProductCard = (props) => {
  const { product } = props;
  const { image, title } = product;

  return (
    <li className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details-container">
        <div className="product-title-container">
          <h3 className="product-title">{title}</h3>
          <button className="product-wishlist-button">
            <RiHeart3Line />
          </button>
        </div>
        <p className="product-desc">
          <span>Sign in</span> or Create an account to see pricing
        </p>
      </div>
    </li>
  );
};

export default ProductCard;
