import React from "react";

const ProductCategory = ({ card }) => {
  const { name, productsCount, img } = card;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="smartphones" className="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{productsCount} Products.</p>
        <div className="card-actions">
          <button className="btn btn-primary text-white">
            Browse Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
