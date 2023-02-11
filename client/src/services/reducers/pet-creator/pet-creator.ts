import { TPet } from "../../../types/types";
import { TPetCreatorActions } from "../../actions/pet-creator";

export type TPetCreatorState = {
    pet: TPet;
};

const initialState: TPetCreatorState = {
    pet: {
        gender: "Male",
        pet_breed: "pet_breed",
        pet_id: -1,
        pet_type: "Cat",
        price: 300,
        can_swim: 0,
        color: "black",
        reproduce_ability: 0,
        shop_id: 1,
        age: 2,
        available: "yes",
        name: "pet_name",
    },
};

export const petCreatorReducer = (
    state = initialState,
    action: TPetCreatorActions
) => {
    switch (action.type) {
        case "SET_PET":
            return {
                ...state,
                pet: { ...action.payload },
            };
        case "SET_PET_AGE":
            return {
                ...state,
                pet: { ...state.pet, age: action.payload },
            };
        case "SET_PET_AVAILABILITY":
            return {
                ...state,
                pet: { ...state.pet, available: action.payload },
            };
        case "SET_PET_BREED":
            return {
                ...state,
                pet: { ...state.pet, pet_breed: action.payload },
            };
        case "SET_PET_CAN_REPRODUCE":
            return {
                ...state,
                pet: { ...state.pet, reproduce_ability: action.payload },
            };
        case "SET_PET_CAN_SWIM":
            return {
                ...state,
                pet: { ...state.pet, can_swim: action.payload },
            };
        case "SET_PET_COLOR":
            return {
                ...state,
                pet: { ...state.pet, color: action.payload },
            };
        case "SET_PET_GENDER":
            return {
                ...state,
                pet: { ...state.pet, gender: action.payload },
            };
        case "SET_PET_NAME":
            return {
                ...state,
                pet: { ...state.pet, name: action.payload },
            };
        case "SET_PET_PRICE":
            return {
                ...state,
                pet: { ...state.pet, price: action.payload },
            };
        case "SET_PET_SHOP_ID":
            return {
                ...state,
                pet: { ...state.pet, shop_id: action.payload },
            };
        case "SET_PET_TYPE":
            return {
                ...state,
                pet: { ...state.pet, pet_type: action.payload },
            };
        default:
            return state;
    }
};
