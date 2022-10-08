import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
    },
    addProduct(state, action) {
      // 1. найти нужный эл. в продуктах
      const targetProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      // 2. проверить есть ли эл. в корзине
      const cartProductIndex = state.cartProducts.findIndex(
        (cartProduct) => cartProduct.id === targetProduct.id
      );

      if (cartProductIndex !== -1) {
        // если есть, то перед добавлением в корзину обновить количество
        const cartProduct = state.cartProducts[cartProductIndex];

        state.cartProducts[cartProductIndex] = {
          ...cartProduct,
          quantity: cartProduct.quantity + action.payload.quantity,
        };
      } else {
        // если нет, то добавить поле поличество
        // 3. добавить эл. в корзину
        state.cartProducts.push({ ...targetProduct, quantity: action.payload.quantity });
      }
    },
    removeProduct(state, action) {
      // 1. найти продукт в корзине
      const targetProductIndex = state.cartProducts.findIndex(
        (cartProduct) => cartProduct.id === action.payload.id
      );
      const targetProduct = state.cartProducts[targetProductIndex];
      // 2. проверить количество
      // если > 1, то убавляем на 1
      if (targetProduct.quantity > 1) {
        state.cartProducts[targetProductIndex] = {
          ...targetProduct,
          quantity: targetProduct.quantity - 1,
        };
      } else {
        // если < 1, то удаляем продукт из корзины
        state.cartProducts.splice(targetProductIndex, 1);
      }
    },
    clearCart(state) {
      state.cartProducts = [];
    },
  },
});

const { getProducts, addProduct, removeProduct, clearCart } = productSlice.actions;
const productReducer = productSlice.reducer;

export { getProducts, addProduct, removeProduct, clearCart, productReducer };
