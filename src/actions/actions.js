export const addMealToCart = (info) => ({ type: "ADD_MEAL_TO_CART", payload: info });
export const removeMealFromCart = (id) => ({
  type: "REMOVE_MEAL_FROM_CART",
  payload: id,
});
