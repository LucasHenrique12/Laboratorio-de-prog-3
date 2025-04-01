import { PropsWithChildren, useReducer } from "react";
import { ProductContext } from "./ctx";
import { initialState, reducer } from "./rdcer";

export function ProductProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}
