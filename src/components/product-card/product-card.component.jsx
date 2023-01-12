import { useContext } from "react";

import { ProductCardContainer, ProductFooter } from "./product-card.styles";
import Button, { BUTTON_TYPE_STYLES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Button
        buttonType={BUTTON_TYPE_STYLES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>

      <ProductFooter>
        <span>{name}</span>
        <span>{price}</span>
      </ProductFooter>
    </ProductCardContainer>
  );
};

export default ProductCard;
