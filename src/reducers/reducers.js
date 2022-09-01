const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MEAL_TO_CART": {
      const targetMealIndex = state.meals.findIndex(
        (meal) => meal.id === action.payload.id
      );
      const targetMeal = state.meals[targetMealIndex];
      const newMeal = { ...targetMeal, quantity: action.payload.mealCount };
      const cartItems = [...state.cartItems, newMeal];

      return { ...state, cartItems };
    }

    case "REMOVE_MEAL_FROM_CART": {
      const targetMealIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      const targetMeal = state.cartItems[targetMealIndex];
      const newMeals = [...state.cartItems];
      newMeals.splice(targetMealIndex, 1);

      if (targetMeal.quantity > 1) {
        const newMeal = { ...targetMeal, quantity: targetMeal.quantity - 1 };

        return { ...state, cartItems: [...newMeals, newMeal] };
      }

      return { ...state, cartItems: [...newMeals] };
    }

    default:
      return { ...state };
  }
};

export { cartReducer };
