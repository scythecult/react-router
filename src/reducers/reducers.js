const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MEAL_TO_CART": {
      const mealIndex = state.meals.findIndex((meal) => meal.id === action.payload.id);
      const targetMeal = state.meals[mealIndex];

      const newMeal = {
        ...targetMeal,
        quantity: action.payload.mealCount,
      };

      const cartItemIndex = state.cartItems.findIndex(
        (item) => item.id === targetMeal.id
      );

      let cartItems = [];

      if (cartItemIndex !== -1) {
        const cartItem = state.cartItems[cartItemIndex];
        const updatedCartItem = {
          ...cartItem,
          quantity: cartItem.quantity + action.payload.mealCount,
        };

        cartItems = [...state.cartItems];

        return {
          ...state,
          cartItems: [
            ...cartItems.slice(0, cartItemIndex),
            updatedCartItem,
            ...cartItems.slice(cartItemIndex + 1),
          ],
        };
      }

      cartItems = [newMeal, ...state.cartItems];

      return { ...state, cartItems };
    }

    case "REMOVE_MEAL_FROM_CART": {
      const mealIndex = state.cartItems.findIndex((item) => item.id === action.payload);
      const targetMeal = state.cartItems[mealIndex];
      const newMeals = [...state.cartItems];

      if (targetMeal.quantity > 1) {
        const newMeal = { ...targetMeal, quantity: targetMeal.quantity - 1 };

        return {
          ...state,
          cartItems: [
            ...newMeals.slice(0, mealIndex),
            newMeal,
            ...newMeals.slice(mealIndex + 1),
          ],
        };
      }

      newMeals.splice(mealIndex, 1);

      return { ...state, cartItems: [...newMeals] };
    }

    default:
      return { ...state };
  }
};

export { cartReducer };
