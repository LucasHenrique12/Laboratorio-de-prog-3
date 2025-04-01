import { useContext, createContext } from "react";
import { TProductDispatch } from "./types";
import { initialState } from "./rdcer";

export const ProductContext = createContext<TProductDispatch | null>(null);

export function useContextProduct() {
  const value = useContext(ProductContext);
  const nullDispatch: TProductDispatch = {
    state: initialState,
    dispatch: () => {},
  };
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }
  return value ? value : nullDispatch;
}
