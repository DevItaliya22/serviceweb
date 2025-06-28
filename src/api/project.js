import axios from 'axios';

export const getProjects = async () => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/projects/getprojects`,
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
}