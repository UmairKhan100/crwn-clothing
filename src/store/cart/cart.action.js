import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (newIsCartOpen) => ({
  type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
  payload: newIsCartOpen,
});

export const setCartItems = (newCartItems) => ({
  type: CART_ACTION_TYPES.SET_CART_ITEMS,
  payload: newCartItems,
});

const addCartItem = (cartItems, productToAdd) => {
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

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems, checkoutItem) => {
  const newCartItems = cartItems.map((cartItem) => {
    if (checkoutItem.id === cartItem.id) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    }
    return cartItem;
  });
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = cartItems.filter((cartItem) => {
    return cartItem.id !== cartItemToClear.id;
  });
  return setCartItems(newCartItems);
};
