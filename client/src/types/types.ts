import { TPetsState } from "../services/reducers/pets/pets";
import { TUserState } from "../services/reducers/user/user";

export type TStore = {
    user: TUserState;
    pets: TPetsState;
};

export type TTableData = {
    head: string[];
    body: string[][];
    buttons?: Array<{ title: string; onClick: () => void }>;
    icons?: JSX.Element[];
};

export type TUser = {
    name: string;
    surname: string;
    telephone: string;
    login: string;
    password: string;
};

export type TUserClient = {
    user_id: number;
    name: string;
    surname: string;
    telephone: string;
    login: string;
    role: "admin" | "vendor" | "customer" | "notAuthorized";
};

export type TOrder = {
    userId: number;
    petId: number;
};

export type TPet = {
    pet_id: number;
    shop_id: number;
    price: number;
    available: "yes" | "no";
    pet_type: "Cat" | "Dog" | "Hedgehog" | "Raccoon" | "Fox";
    name: string;
    age: number;
    color: string;
    can_swim: 0 | 1;
    reproduce_ability: 0 | 1;
    gender: "Male" | "Female";
    pet_breed: string;
};

export type TShop = {
    Shop_id: number;
    adress: string;
    city: string;
    owner: string;
    telephone: string;
};

export type TAnswer = {
    success: boolean;
    payload: any;
    message: string;
};

export type TAuthData = {
    login: string;
    password: string;
};
