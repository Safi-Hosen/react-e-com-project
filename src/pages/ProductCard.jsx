import { Link } from "react-router-dom";
import { useCart } from "../pages/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";
  return (
    <>
      <div className="product-cart" key={product.id}>
        <img src={product.image} alt="image" className="product-image" />
        <div className="product-card-content">
          <h3 className="product-card-name">{product.name}</h3>
          <h4 className="product-card-name">${product.price}</h4>
          <div>
            <Link
              className="btn btn-secondary mr-3"
              to={`/product/${product.id}`}
            >
              View Details
            </Link>
            <button
              onClick={() => addToCart(product.id)}
              className="btn btn-primary"
            >
              Add to Cart {productQuantityLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
