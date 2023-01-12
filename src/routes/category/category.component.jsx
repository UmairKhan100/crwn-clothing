import { useContext } from "react";
import { useParams } from "react-router-dom";

import {
  CategoryContainer,
  CategoryName,
  ProductsContainer,
} from "./category.styles";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();

  return (
    <CategoryContainer>
      <CategoryName>{category.toUpperCase()}</CategoryName>

      <ProductsContainer>
        {Object.keys(categoriesMap).length !== 0 &&
          categoriesMap[category].map((product) => (
            <ProductCard product={product} />
          ))}
      </ProductsContainer>
    </CategoryContainer>
  );
};

export default Category;