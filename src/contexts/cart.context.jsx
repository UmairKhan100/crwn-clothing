import { createContext, useReducer } from "react";

export const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

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

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, totalPrice } = state;

  const setIsCartOpen = (newIsCartOpen) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
      payload: newIsCartOpen,
    });
  };

  const setCartItems = (newCartItems) => {
    const newTotalPrice = newCartItems.reduce(
      (accumulator, cartItem) =>
        accumulator + cartItem.quantity * cartItem.price,
      0
    );

    const newCartCount = newCartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    );

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        totalPrice: newTotalPrice,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    setCartItems(newCartItems);
  };

  const removeItemFromCart = (checkoutItem) => {
    const newCartItems = cartItems.map((cartItem) => {
      if (checkoutItem.id === cartItem.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCartItems(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = cartItems.filter((cartItem) => {
      return cartItem.id !== cartItemToClear.id;
    });
    setCartItems(newCartItems);
  };

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
