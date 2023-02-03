export type TUser = {
    name: string;
    surname: string;
    telephone: string;
    login: string;
    password: string;
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
