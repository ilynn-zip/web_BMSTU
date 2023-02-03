import { TAnswer, TAuthData, TUser } from "../types/types";

const USER_API_URL = "http://localhost:5000/api/user";

export const getUsers = () => {
    return fetch(`${USER_API_URL}/getUsers`)
        .then((res) => {
            return res.json();
        })
        .then((answer: TAnswer) => {
            if (answer.success) {
                return answer.payload;
            } else return Promise.reject(answer.payload);
        });
};

export const addUser = (user: TUser) => {
    return fetch(`${USER_API_URL}/addUser`, {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => {
            return res.json();
        })
        .then((answer: TAnswer) => {
            console.log(answer);
        });
};

export const auth = (authData: TAuthData) => {
    return fetch(`${USER_API_URL}/auth`, {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
    })
        .then((res) => {
            return res.json();
        })
        .then((answer: TAnswer) => {
            console.log(answer);
        });
};
