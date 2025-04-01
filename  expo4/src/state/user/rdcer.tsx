import { TStatetUser, UserActions, UserActionTypes } from "./types";
export const initialState: TStatetUser = {
  users: [],
};
export function reducer(state: TStatetUser, action: UserActions): TStatetUser {
  switch (action.type) {
    case UserActionTypes.ADD_USER:
      const oldState = { ...state };

      return { ...state, users: [...state.users, action.payload] };
    case UserActionTypes.DELETE_USER:
      return { ...state };
    default:
      return { ...state };
  }
}
