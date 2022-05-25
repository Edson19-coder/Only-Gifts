import { axiosBase as axios } from "./Config";

export const createUser = async (user) => {
    try {
        const response = await axios.post("/user", user);
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const authUser = async (user) => {
    try {
        const response = await axios.post("/user/SignIn", user);
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}
