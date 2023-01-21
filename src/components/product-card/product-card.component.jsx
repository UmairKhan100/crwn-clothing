import { useSelector, useDispatch } from "react-redux";

import {
  BackgroundImage,
  ProductCardContainer,
  ProductFooter,
} from "./product-card.styles";
import Button, { BUTTON_TYPE_STYLES } from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <BackgroundImage imageurl={imageUrl} />
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
