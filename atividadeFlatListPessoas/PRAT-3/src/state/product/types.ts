import { TProductAttr } from "@/src/model/product";
// action types
export enum ProductActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
}
export type DeleteProductAction = {
  type: ProductActionTypes.DELETE_PRODUCT;
  payload: TProductAttr;
};
export type AddProductAction = {
  type: ProductActionTypes.ADD_PRODUCT;
  payload: TProductAttr;
};
export type ProductActions = AddProductAction | DeleteProductAction;
// state types
export type TStatetProduct = {
  products: TProductAttr[];
};
// reducer dispatch
export type TProductDispatch = {
  state: TStatetProduct;
  dispatch: React.Dispatch<ProductActions>;
};
