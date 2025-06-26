import axios from "axios";

export const getContactDetails = async () => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/contactinfo/getcontactinfo`,
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching contact details:', error);
        throw error;
    }
}