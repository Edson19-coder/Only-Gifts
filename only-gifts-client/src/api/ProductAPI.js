import { axiosBase as axios } from "./Config";

export const addProduct = async (product, token) => {
    try {
        const response = await axios.post("/manager/add-product", product, {
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

export const uploadImage = async (formData, token) => {
    try {
        const response = await axios.post("/manager/add-product-image", formData, {
            headers: {
                Authorization: token,
                'Content-Type': 'multipart/form-data'
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const getProductsManager = async (token) => {
    try {
        const response = await axios.post("/manager/get-products","", {
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

export const getProducts = async (token) => {
    try {
        const response = await axios.post("/get-products","", {
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

export const getProduct = async (product,token) => {
    try {
        const response = await axios.post("/get-product",product, {
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

export const dropProduct = async (product, token) => {
    try {
        const response = await axios.post("/manager/drop-product", product, {
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

export const changeStatusProduct = async (product, token) => {
    try {
        const response = await axios.post("/manager/change-status-product", product, {
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