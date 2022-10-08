export const FETCH_MEALS = "FETCH_MEALS";
export const ADD_MEAL_TO_CART = "ADD_MEAL_TO_CART";
export const REMOVE_MEAL_FROM_CART = "REMOVE_MEAL_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const ADD_RECENT_MEALS = "ADD_RECENT_MEALS";
export const REMOVE_FROM_RECENT_MEALS = "REMOVE_FROM_RECENT_MEALS";
export const MERGE_RECENT_WITH_CART_MEALS = "MERGE_RECENT_WITH_CART_MEALS";
export const REMOVE_MEAL_FROM_RECENT = "REMOVE_MEAL_FROM_RECENT";
export const CLEAR_RECENT = "CLEAR_RECENT";

export const fetchMeals = (meals) => ({ type: FETCH_MEALS, payload: meals });
export const addMealToCart = (info) => ({ type: ADD_MEAL_TO_CART, payload: info });
export const removeMealFromCart = (id) => ({
  type: REMOVE_MEAL_FROM_CART,
  payload: id,
});
export const clearCart = () => ({ type: CLEAR_CART });
export const addRecentMeals = (meals) => ({ type: ADD_RECENT_MEALS, payload: meals });
export const mergeRecentWithCart = () => ({ type: MERGE_RECENT_WITH_CART_MEALS });
export const removeMealFromRecent = (id) => ({
  type: REMOVE_MEAL_FROM_RECENT,
  payload: id,
});
export const clearRecent = () => ({ type: CLEAR_RECENT });