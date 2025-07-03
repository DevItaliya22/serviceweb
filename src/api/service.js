import axios from 'axios';

export const getServices = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';
        const apiUrl = `${baseUrl}/api/services/allservices`;
        console.log('API URL:', apiUrl);
        
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        console.error("Error response:", error.response);
        
        // Throw the error instead of returning mock data
        throw error;
    }
}