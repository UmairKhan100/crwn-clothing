import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  CategoryContainer,
  CategoryName,
  ProductsContainer,
} from "./category.styles";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();

  return (
    <CategoryContainer>
      <CategoryName>{category.toUpperCase()}</CategoryName>

      <ProductsContainer>
        {Object.keys(categoriesMap).length !== 0 &&
          categoriesMap[category].map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
      </ProductsContainer>
    </CategoryContainer>
  );
};

export default Category;
