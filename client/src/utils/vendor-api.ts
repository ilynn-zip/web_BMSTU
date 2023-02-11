import { TAnswer, TPet } from "../types/types";
const VENDOR_API_URL = "http://localhost:5000/api/vendor";

export const createPet = async (pet: TPet) => {
    return await fetch(`${VENDOR_API_URL}/createPet`, {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...pet }),
    })
        .then((res) => {
            return res.json();
        })
        .then((answer: TAnswer) => {
            if (answer.success) {
                alert(answer.message);
                return answer.payload;
            } else return Promise.reject(answer.payload);
        });
};
