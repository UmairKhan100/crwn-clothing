import { useContext } from "react";

import { ShopContainer } from "./shop.styles";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

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
