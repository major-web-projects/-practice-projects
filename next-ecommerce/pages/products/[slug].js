import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/pages/Layout";
import data from "../../utils/data";

const ProductPage = () => {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout>
      <div className="py-4">
        <Link href="/">
          <a>back to products</a>
        </Link>
      </div>

      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </div>
        <div>
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <p>category: {product.category}</p>
            </li>
            <li>
              <p>Brand: {product.brand}</p>
            </li>
            <li>
              <p>{product.numReviews}</p>
            </li>
            <li>
              <p>description: {product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? "In Stock" : "Unavailable"}</div>
            </div>
            <button className="primary-button w-full">Add to cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
