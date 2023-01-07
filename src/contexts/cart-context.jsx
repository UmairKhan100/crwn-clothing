import { createContext, useEffect, useState } from "react";

const updateCart = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      productToAdd.id === cartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const updateTotalPrice = (cartItems) => {
  return cartItems.reduce((accumulator, cartItem) => {
    const value = cartItem.quantity * cartItem.price;
    return accumulator + value;
  }, 0);
};

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(updateCart(cartItems, productToAdd));
    setCartCount(cartCount + 1);
  };

  const removeItemFromCart = (checkoutItem) => {
    const newCartItems = cartItems.map((cartItem) => {
      if (checkoutItem.id === cartItem.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCartItems(newCartItems);
    setCartCount(cartCount - 1);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCart = cartItems.filter((cartItem) => {
      return cartItem.id !== cartItemToClear.id;
    });
    setCartItems(newCart);
    setCartCount(cartCount - cartItemToClear.quantity);
  };

  useEffect(() => {
    setTotalPrice(updateTotalPrice(cartItems));
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    clearItemFromCart,
    removeItemFromCart,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
