import { ADD_MEAL_TO_CART, CLEAR_CART, REMOVE_MEAL_FROM_CART } from "../actions/actions";
import { getMeals } from "../services/meals";

const meals = getMeals();

const initialState = {
  meals,
  cartItems: [],
  recentItems: [],
};

const updateItems = (items, newItem, index) => {
  return [...items.slice(0, index), newItem, ...items.slice(index + 1)];
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_MEAL_TO_CART: {
      const targetMeal = state.meals.find((meal) => meal.id === action.payload.id);
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
        // * вместо updateItems можно использовать, доступ по индексу и переписывать "старое" значение
        // * cartItems[cartItemIndex] = updatedCartItem;
        return {
          ...state,
          cartItems: updateItems(cartItems, updatedCartItem, cartItemIndex),
        };
      }

      const newMeal = {
        ...targetMeal,
        quantity: action.payload.mealCount,
      };

      cartItems = [newMeal, ...state.cartItems];

      return { ...state, cartItems };
    }

    case REMOVE_MEAL_FROM_CART: {
      const mealIndex = state.cartItems.findIndex((item) => item.id === action.payload);
      const targetMeal = state.cartItems[mealIndex];
      const newMeals = [...state.cartItems];

      if (targetMeal.quantity > 1) {
        const newMeal = { ...targetMeal, quantity: targetMeal.quantity - 1 };

        return {
          ...state,
          cartItems: updateItems(newMeals, newMeal, mealIndex),
        };
      }

      newMeals.splice(mealIndex, 1);

      return { ...state, cartItems: [...newMeals] };
    }
    case CLEAR_CART:
      return { ...state, cartItems: [] };

    default:
      return { ...state };
  }
};

export { cartReducer, initialState };
