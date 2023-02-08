import { combineReducers } from "redux";
import { userReducer } from "./user/user";
import { petsReducer } from "./pets/pets";

export const rootReducer = combineReducers({
    user: userReducer,
    pets: petsReducer,
});
