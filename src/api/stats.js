import axios from 'axios';

export const getStats = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';
        const apiUrl = `${baseUrl}/api/stats/getstats`;
        
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching stats:', error);
        console.error('Error response:', error.response);
        throw error;
    }
}