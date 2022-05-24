import { axiosBase as axios } from "./Config";

export const addPurchase = async (purchase, token) => {
    try {
        const response = await axios.post("/add-purchase", purchase, {
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

export const updatePurchase = async (purchase, token) => {
    try {
        const response = await axios.post("/edit-purchase", purchase, {
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

export const addPurchaseItems = async (items, token) => {
    try {
        const response = await axios.post("/add-purchase-item", items, {
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

export const getPurchasesUser = async (data, token) => {
    try {
        const response = await axios.post("/get-purchase", data, {
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

export const getPurchasesManager = async (token) => {
    try {
        const response = await axios.post("/manager/get-purchase", "", {
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

export const getPurchasesManagerHistory = async (token) => {
    try {
        const response = await axios.post("/manager/get-purchase-history", "", {
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

export const getPurchaseDetail = async (purchase,token) => {
    try {
        const response = await axios.post("/get-purchase-detail", purchase, {
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