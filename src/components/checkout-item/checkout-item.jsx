import "./checkout-item.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  const { addItemToCart, clearItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => {
    if (quantity > 1) removeItemFromCart(cartItem);
  };
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <tr className="checkout-item">
      <td>
        <img alt={name} src={imageUrl} />
      </td>
      <td>
        <span>{name}</span>
      </td>
      <td>
        <div className="quantity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={removeItemHandler}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <span>{quantity}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={addItemHandler}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </td>
      <td className="center">
        <span>{price}</span>
      </td>
      <td className="center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="remove"
          onClick={clearItemHandler}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </td>
    </tr>
  );
};

export default CheckoutItem;
