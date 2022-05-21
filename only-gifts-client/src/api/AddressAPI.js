const axios = require("axios");

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