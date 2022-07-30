import Link from "next/link";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/products/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/products/${product.slug}`}>
          <a>{product.name}</a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>{product.price}</p>
        <button className="primary-button">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
