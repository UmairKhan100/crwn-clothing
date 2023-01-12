import { useContext } from "react";

import {
  CheckoutContainer,
  TotalPrice,
  HeaderContainer,
  HeaderItem,
} from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <HeaderContainer>
        <HeaderItem>Product</HeaderItem>
        <HeaderItem>Description</HeaderItem>
        <HeaderItem>Quantity</HeaderItem>
        <HeaderItem>Price</HeaderItem>
        <HeaderItem>Remove</HeaderItem>
      </HeaderContainer>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <TotalPrice>{`TOTAL: $${totalPrice}`}</TotalPrice>
    </CheckoutContainer>
  );
};

export default Checkout;
