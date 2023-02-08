import { TAnswer } from "../types/types";
const CUSTOMER_API_URL = "http://localhost:5000/api/customer";

export const getPets = () => {
    return fetch(`${CUSTOMER_API_URL}/getPets`)
        .then((res) => {
            return res.json();
        })
        .then((answer: TAnswer) => {
            if (answer.success) {
                return answer.payload;
            } else return Promise.reject(answer.payload);
        });
};

export const getShops = async () => {
    return await fetch(`${CUSTOMER_API_URL}/getShops`)
        .then((res) => {
            return res.json();
        })
        .then((answer: TAnswer) => {
            if (answer.success) {
                return answer.payload;
            } else return Promise.reject(answer.payload);
        });
};
