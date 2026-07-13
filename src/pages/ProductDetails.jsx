// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getProductById } from "../data/products";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const foundProduct = getProductById(id);

//     if (!foundProduct) {
//       navigate("/");
//       return;
//     }

//     setProduct(foundProduct);
//     console.log(foundProduct);
//   }, [product, navigate]);

//   return (
//     <>
//       <div className="page">
//         <div className="container">
//           <div className="product-detail">
//             <div className="product-detail-image">
//               <img src={product.image} alt={product.name} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);

  useEffect(() => {
    if (!product) {
      navigate("/", { replace: true });
    }
  }, [product, navigate]);

  if (!product) return null;

  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-content">
            <h1 className="font-semibold text-2xl">{product.name}</h1>
            <p className="font-semibold text-xl mt-2 text-blue-500">
              ${product.price}
            </p>
            <p className="product-description">{product.description}</p>
            <button className="btn btn-primary mt-3">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
