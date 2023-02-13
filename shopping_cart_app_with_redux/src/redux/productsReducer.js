import { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } from "./actionTypes";
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);

  switch (type) {

    case SELECTED_PRODUCT:
      return { ...state, ...payload };

    case REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
