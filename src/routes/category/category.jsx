import "./category.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories-context";
import ProductCard from "../../components/product-card/product-card";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-category-container">
      <h1>{category.toUpperCase()}</h1>
      <div className="products-container">
        {Object.keys(categoriesMap).length !== 0 &&
          categoriesMap[category].map((product) => (
            <ProductCard product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
