import React from "react";
import "./product.scss";
const Product = ({ product, onAddClick }) => {
  let description = product.description;
  description = description.replace(/(<([^>]+)>)/gi, "");
  return (
    <div className="product">
      <div className="card">
        <div className="image">
          <img src={product.image.url} />
        </div>
        <div className="details">
          <div className="detail1">
            <div>{product.name}</div>
            <div>{product.price.formatted_with_symbol}</div>
          </div>
          <div className="detail2">{description}</div>
          <div className="add_to_cart">
            <button onClick={() => onAddClick(product.id,1)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
