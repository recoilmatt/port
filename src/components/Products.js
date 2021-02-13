import React, { useContext } from "react";
import { DataContext } from "./DataProvider";

import "../pages/Home.css";

export default function Products() {
  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <section className="products-container">
      <div className="products">
        {products.map((product) => (
          <div className="card" key={product._id}>
            <img src={product.images[0]} alt="/" />

            <div className="box">
              <h4>{product.title}</h4>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
