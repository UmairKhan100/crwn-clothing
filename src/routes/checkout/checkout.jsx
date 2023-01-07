import { useContext } from "react";
import "./checkout.scss";
import { CartContext } from "../../contexts/cart-context";
import CheckoutItem from "../../components/checkout-item/checkout-item";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <table>
        <thead>
          <tr>
            <th className="p">Product</th>
            <th className="d">Description</th>
            <th className="q">Quantity</th>
            <th className="c">Price</th>
            <th className="r">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </tbody>
      </table>
      <span className="total-price">{`TOTAL: $${totalPrice}`}</span>
    </div>
  );
};

export default Checkout;
