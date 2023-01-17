import { useSelector } from "react-redux";

import { ShopContainer } from "./shop.styles";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const Shop = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <ShopContainer>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </ShopContainer>
  );
};

export default Shop;
