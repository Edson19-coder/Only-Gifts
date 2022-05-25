import { axiosBase as axios } from "./Config";

export const getCategory = async (token) => {
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