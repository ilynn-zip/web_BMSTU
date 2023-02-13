import { petCreatorReducer } from "./pet-creator";

const initialState = {
    pet: {
        pet_id: -1,
        shop_id: 0,
        price: 0,
        available: "no",
        pet_type: "Cat",
        name: "",
        age: 0,
        color: "",
        can_swim: 0,
        reproduce_ability: 0,
        gender: "Male",
        pet_breed: "",
    },
    mode: "Create",
};

const testPet = {
    pet_id: -1,
    shop_id: 10,
    price: 22222,
    available: "no",
    pet_type: "Dog",
    name: "Valaha",
    age: 0,
    color: "Red",
    can_swim: 1,
    reproduce_ability: 0,
    gender: "Male",
    pet_breed: "breed",
};

describe("pets reducer", () => {
    it("should return the initial state", () => {
        expect(petCreatorReducer(undefined, {})).toEqual(initialState);
    });
    it("should handle SET_PET", () => {
        expect(
            petCreatorReducer(initialState, {
                payload: testPet,
                type: "SET_PET",
            })
        ).toEqual({ ...initialState, pet: { ...testPet } });
    });
    it("should handle SET_PET_TYPE", () => {
        expect(
            petCreatorReducer(initialState, {
                payload: "Raccoon",
                type: "SET_PET_TYPE",
            })
        ).toEqual({
            ...initialState,
            pet: { ...initialState.pet, pet_type: "Raccoon" },
        });
    });
    it("should handle SET_PET_CREATOR_MODE", () => {
        expect(
            petCreatorReducer(initialState, {
                payload: "Update",
                type: "SET_PET_CREATOR_MODE",
            })
        ).toEqual({ ...initialState, mode: "Update" });
    });
});
