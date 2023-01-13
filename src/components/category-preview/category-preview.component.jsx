import {
  CategoryPreviewContainer,
  CategoryLink,
  ProductsContainer,
} from "./category-preview.styles";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryLink to={title}>{title.toUpperCase()}</CategoryLink>
      </h2>

      <ProductsContainer>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </ProductsContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
