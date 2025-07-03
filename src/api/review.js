import axios from "axios";

export const getReviews = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';
        const response = await axios.get(`${baseUrl}/api/reviews/allreviews`);
        return response.data;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
};


export const getReviewById = async (id) => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';
        const response = await axios.get(`${baseUrl}/api/reviews/project/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching review by id:', error);
        throw error;
    }
};