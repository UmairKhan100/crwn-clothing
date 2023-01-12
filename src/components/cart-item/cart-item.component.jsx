import { CartItemContainer, ItemName, ItemQuantity } from "./cart-item.styles";

const CartItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />

      <div>
        <ItemName>{name}</ItemName>
        <ItemQuantity>
          {quantity} x ${price}
        </ItemQuantity>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
