import "./category-preview.scss";
import ProductCard from "../../components/product-card/product-card";

const CategoryPreview = ({ title, products }) => (
  <div className="category-preview">
    <h2>
      <span>{title.toUpperCase()}</span>
    </h2>
    <div className="products-container">
      {products.slice(0, 4).map((product) => (
        <ProductCard key={title} product={product} />
      ))}
    </div>
  </div>
);

export default CategoryPreview;
