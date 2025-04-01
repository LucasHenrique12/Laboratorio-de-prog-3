import { PropsWithChildren, useReducer } from "react";
import { UserContext } from "./ctx";
import { initialState, reducer } from "./rdcer";

export function UserProvider({ children }: PropsWithChildren) {
const [state, dispatch] = useReducer(reducer, initialState);
return (
<UserContext.Provider value={{ state, dispatch }}>
{children}
</UserContext.Provider>
)
}