import { ProductType } from ".";

export type IninialState = {
  products: ProductType[];
};

export type ActionType = {
  type: string;
  payload: any;
};
