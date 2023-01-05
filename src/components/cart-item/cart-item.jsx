import "./cart-item.scss";

const CartItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div>
        <h2 className="item-name">{name}</h2>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
