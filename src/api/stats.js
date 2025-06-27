import axios from 'axios';

export const getStats = async () => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/stats/getstats`
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching stats:', error);
        throw error;
    }
}