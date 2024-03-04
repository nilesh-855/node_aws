import Product from "../Products/Product/Product";
import "./products.scss";
const Products = ({ products, onAddClick }) => {
  return (
    <div className="products">
      <div style={{ background: "" }}></div>
      <div className="main">
        {products.map((product) => {
          return <Product product={product} onAddClick={onAddClick} />;
        })}
      </div>
      <div style={{ background: "" }}></div>
    </div>
  );
};

export default Products;
