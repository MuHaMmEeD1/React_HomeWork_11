import { ProductType } from "../types";
import { ActionType } from "../types/redux";

export const deleteElmentInProducts = (id: string): ActionType => {
  return {
    type: "products/deleteElement",
    payload: id,
  };
};

export const addElementInProducts = (product: ProductType): ActionType => {
  return {
    type: "products/addElement",
    payload: product,
  };
};
