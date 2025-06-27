import axios from 'axios';

export const getServices = async () => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/services/allservices`,
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        throw error;
    }
}