import { TStatetProduct, ProductActions, ProductActionTypes } from "./types";

export const initialState: TStatetProduct = {
  products: [],
};
export function reducer(
  state: TStatetProduct,
  action: ProductActions
): TStatetProduct {
  switch (action.type) {
    case ProductActionTypes.ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case ProductActionTypes.DELETE_PRODUCT:
      return { ...state };
    default:
      return { ...state };
  }
}
