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

export const submitform = async(name, email, phone, enquiryType, message) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/api/contact`,
            {
                name,
                email,
                phone,
                enquiryType,
                message
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error submitting form:', error);
        throw error;
    }
}