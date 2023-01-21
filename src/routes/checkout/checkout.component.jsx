import { useSelector } from "react-redux";

import {
  CheckoutContainer,
  TotalPrice,
  HeaderContainer,
  HeaderItem,
} from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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

      <TotalPrice>{`TOTAL: $${cartTotal}`}</TotalPrice>
    </CheckoutContainer>
  );
};

export default Checkout;
