import "./category-preview.scss";
import ProductCard from "../../components/product-card/product-card";
import { useNavigate } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <div className="category-preview">
      <h2>
        <span onClick={onClickHandler}>{title.toUpperCase()}</span>
      </h2>
      <div className="products-container">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
