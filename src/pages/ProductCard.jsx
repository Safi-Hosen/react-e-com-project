import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <>
      <div className="product-cart" key={product.id}>
        <img src={product.image} alt="image" className="product-image" />
        <div className="product-card-content">
          <h3 className="product-card-name">{product.name}</h3>
          <h4 className="product-card-name">${product.price}</h4>
          <div>
            <Link className="btn btn-secondary mr-3">Details</Link>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
