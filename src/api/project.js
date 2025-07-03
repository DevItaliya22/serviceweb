import axios from 'axios';

export const getProjects = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';
        console.log('Making API request to:', `${baseUrl}/api/projects/getprojects`);
        
        const response = await axios.get(
            `${baseUrl}/api/projects/getprojects`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 10000, 
            }
        );
        
        console.log('API Response:', response);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        if (error.response) {
            console.error('Response data:', error.response.data);
        }
        throw error;
    }
}

export const getProjectById = async (id) => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';
        const apiUrl = `${baseUrl}/api/projects/projects/${id}`;
        
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching project by ID:', error);
        console.error('Error response:', error.response);
        throw error;
    }
}