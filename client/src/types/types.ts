export type TUser = {
    name: string;
    surname: string;
    telephone: string;
    login: string;
    password: string;
};

export type TPets = {
    pets: TPet[];
    petsInfo: TPetInfo[];
};

export type TPet = {
    pet_id: number;
    shop_id: number;
    price: number;
    available: "yes" | "no";
};

export type TPetInfo = {
    pet_id: number;
    pet_type: "Cat" | "Dog" | "Hedgehog" | "Raccoon" | "Fox";
    name: string;
    age: number;
    color: string;
    can_swim: boolean;
    reproduce_ability: boolean;
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
