import { axiosBase as axios } from "./Config";

export const zipCodeInfo = async (zipCode) => {
    try {
        const options = {
            method: 'GET',
            url: `https://mexico-zip-codes.p.rapidapi.com/codigo_postal/${zipCode}`,
            headers: {
                'X-RapidAPI-Host': 'mexico-zip-codes.p.rapidapi.com',
                'X-RapidAPI-Key': '43cb18b156msh2dc71260ff5e8eap1d77f3jsnb3e359141496'
            }
        };
        const response = await axios.request(options);
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const addAddress = async (address, token) => {
    try {
        const response = await axios.post("/add-address", address, {
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

export const getAddresses = async (address, token) => {
    try {
        const response = await axios.post("/get-addresses", address, {
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

export const getAddress = async (address, token) => {
    try {
        const response = await axios.post("/get-address", address, {
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