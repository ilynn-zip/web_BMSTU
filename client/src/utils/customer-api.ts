import { TAnswer, TOrder } from "../types/types";
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

export const getCustomerOrders = async (user_id: number) => {
    return await fetch(`${CUSTOMER_API_URL}/getCustomerOrders`, {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id }),
    })
        .then((res) => {
            return res.json();
        })
        .then((answer: TAnswer) => {
            if (answer.success) {
                return answer.payload;
            } else return Promise.reject(answer.payload);
        });
};

export const createOrder = async (order: TOrder) => {
    return await fetch(`${CUSTOMER_API_URL}/createOrder`, {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    })
        .then((res) => {
            return res.json();
        })
        .then((answer: TAnswer) => {
            console.log(answer);
            if (answer.success) {
                return answer.payload;
            } else return Promise.reject(answer.payload);
        });
};
