import axios from "axios";

export const getPlatform = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/integration-platforms`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}