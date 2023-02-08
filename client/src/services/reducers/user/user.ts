import { TPet, TUserClient } from "../../../types/types";
import { TUserAction } from "../../actions/user";

export type TUserState = {
    user: TUserClient;
};

const initialState: TUserState = {
    user: {
        login: "",
        name: "",
        surname: "",
        telephone: "",
        role: "notAuthorized",
    },
};

export const userReducer = (state = initialState, action: TUserAction) => {
    switch (action.type) {
        case "SET_AUTHED":
            return {
                ...state,
            };
        case "SET_USER":
            return {
                ...state,
                user: { ...action.payload },
            };
        case "LOGOUT":
            return {
                ...state,
                user: {
                    login: "",
                    name: "",
                    surname: "",
                    telephone: "",
                    role: "notAuthorized",
                },
            };

        default:
            return state;
    }
};
