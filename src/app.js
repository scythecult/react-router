import React, { useReducer, useState } from "react";
import styles from "./app.module.css";
import { CartContext } from "./cart-context/cart-context";
import { Cart } from "./components/cart/cart";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { MealsSummary } from "./components/meals-summary/meals-summary";
import { Meals } from "./components/meals/meals";
import { getMeals } from "./services/meals";

const meals = getMeals();

const initialState = {
  meals,
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MEAL_TO_CART": {
      const targetMeal = state.meals.find((meal) => meal.id === action.payload.mealId);
      const newMeal = { ...targetMeal, quantity: action.payload.mealCount };

      return { ...state, cartItems: [...state.cartItems, newMeal] };
    }

    default:
      return { ...state };
  }
};

const updateCart = (item) => {};
const getCartQuantity = (items) => {
  console.log("cart items", items);
  return items.reduce((initital, current) => {
    initital += current.quantity;

    return initital;
  }, 0);
};

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isCartShown, setIsCartShown] = useState(false);

  // console.log(state.cartItems);
  return (
    <CartContext.Provider
      value={{
        cartCount: getCartQuantity(state.cartItems),
        mealHandler: (info) => {
          dispatch({ type: "ADD_MEAL_TO_CART", payload: info });
        },
        setIsCartShown,
      }}>
      <div className={styles.app}>
        <Header />
        <Hero />
        <MealsSummary />
        <Meals meals={state.meals} />
        {isCartShown && <Cart totalAmount={10050} />}
      </div>
    </CartContext.Provider>
  );
};

export { App };
