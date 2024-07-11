import { ProductType } from "./../types/index";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";
import { ActionType, IninialState } from "../types/redux";

const initialState: IninialState = {
  products: [{ id: "default", name: "default", price: "default" }],
};

const enhancer = devToolsEnhancer();

const rootReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "products/deleteElement":
      return {
        ...state,
        products: state.products.filter((pr) => pr.id !== action.payload),
      };
    case "products/addElement":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export const store = createStore(rootReducer, enhancer);
