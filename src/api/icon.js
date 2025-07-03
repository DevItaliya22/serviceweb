import axios from "axios";

export const getIcon = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';
        const response = await axios.get(`${baseUrl}/api/icons/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching icon:', error);
        throw error;
    }
}