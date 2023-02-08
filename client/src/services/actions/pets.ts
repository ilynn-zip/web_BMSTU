import { bindActionCreators } from "@reduxjs/toolkit";
import { TPet } from "../../types/types";
import { SET_PETS, SET_FILTERED_PETS } from "../action-types/pets";
import { store } from "../store";

//types
export interface ISetPets {
    readonly type: typeof SET_PETS;
    readonly payload: TPet[];
}
export interface ISET_FILTERED_PETS {
    readonly type: typeof SET_FILTERED_PETS;
    readonly payload: TPet[];
}

export type TPetsAction = ISetPets | ISET_FILTERED_PETS;

//types

const doSetPets = (pets: TPet[]): ISetPets => ({
    type: SET_PETS,
    payload: pets,
});
const doSetFilteredPets = (pets: TPet[]): ISET_FILTERED_PETS => ({
    type: SET_FILTERED_PETS,
    payload: pets,
});

export const boundPets = bindActionCreators(
    {
        setPets: doSetPets,
        setFilteredPets: doSetFilteredPets,
    },
    store.dispatch
);
