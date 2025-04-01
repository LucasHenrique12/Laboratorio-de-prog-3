import { TUserAttr } from "@/src/model/user";
// action types
export enum UserActionTypes {
ADD_USER = "ADD_USER",
DELETE_USER = "DELETE_USER",
}
export type DeleteUserAction =
{type:UserActionTypes.DELETE_USER,payload:TUserAttr}
export type AddUserAction = {type:UserActionTypes.ADD_USER,payload:TUserAttr}
export type UserActions = AddUserAction|DeleteUserAction
// state types
export type TStatetUser = {
users: TUserAttr[];
}
// reducer dispatch
export type TUserDispatch = {
state: TStatetUser;
dispatch: React.Dispatch<UserActions>;
};