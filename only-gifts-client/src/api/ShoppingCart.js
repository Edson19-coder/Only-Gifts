import { axiosBase as axios } from "./Config";

export const addProductShoppingCart = async (product, token) => {
    try {
        const response = await axios.post("/add-cart-item", product, {
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

export const getProductsShoppingCart = async (data, token) => {
    try {
        const response = await axios.post("/shopping-cart", data, {
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

export const updateProductShoppingCart = async (data, token) => {
    try {
        const response = await axios.post("/edit-cart-item", data, {
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

export const deleteProductShoppingCart = async (data, token) => {
    try {
        const response = await axios.post("/drop-cart-item", data, {
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

export const deleteShoppingCart = async (data, token) => {
    try {
        const response = await axios.post("/drop-shopping-cart", data, {
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