import { axiosBase as axios } from "./Config";

export const addCard = async (card, token) => {
    try {
        const response = await axios.post("/add-payment-method", card, {
            headers: {
                Authorization: token
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const getCard = async (card, token) => {
    try {
        const response = await axios.post("/get-payment-methods", card, {
            headers: {
                Authorization: token
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const getCardById = async (card, token) => {
    try {
        const response = await axios.post("/get-payment-method", card, {
            headers: {
                Authorization: token
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}