// Add new cart item or +1 position to cart item when goods in backed
export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

// Remove cart item

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  console.log(cartItemToRemove);

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
