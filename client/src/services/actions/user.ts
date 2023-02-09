import { store } from "../store";
import { bindActionCreators } from "redux";
import { SET_AUTHED, SET_USER, LOGOUT } from "../action-types/user";
import { TUserClient } from "../../types/types";

//types

export interface ISetAuthed {
    readonly type: typeof SET_AUTHED;
    readonly payload: boolean;
}
export interface ISetUser {
    readonly type: typeof SET_USER;
    readonly payload: TUserClient;
}
export interface ILogout {
    readonly type: typeof LOGOUT;
}

export type TUserAction = ISetAuthed | ISetUser | ILogout;

//types

const doSetAuthed = (status: boolean): ISetAuthed => ({
    type: SET_AUTHED,
    payload: status,
});
const doSetUser = (user: TUserClient): ISetUser => ({
    type: SET_USER,
    payload: user,
});
const doLogout = (): ILogout => ({
    type: LOGOUT,
});

export const boundUser = bindActionCreators(
    {
        setAuthed: doSetAuthed,
        setUser: doSetUser,
        logout: doLogout,
    },
    store.dispatch
);
