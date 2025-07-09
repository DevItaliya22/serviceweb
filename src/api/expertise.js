import axios from "axios";

export const getExpertise = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/expertise`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
