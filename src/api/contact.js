import axios from "axios";

export const getContactDetails = async () => {
    try {
        const apiUrl = import.meta.env.DEV ? '/api/contactinfo/getcontactinfo' : `${import.meta.env.VITE_BASE_URL}/api/contactinfo/getcontactinfo`;
        
        const response = await axios.get(apiUrl, {
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000, 
        });
        
        console.log('Contact API Response:', response);
        console.log('Contact API Response Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching contact details:', error);
        if (error.response) {
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            console.error('Error response headers:', error.response.headers);
        }
        throw error;
    }
}

export const submitform = async(name, email, phone, enquiryType, message) => {
    try {
        const apiUrl = import.meta.env.DEV ? '/api/contact' : `${import.meta.env.VITE_BASE_URL}/api/contact`;
        
        const response = await axios.post(apiUrl, {
            name,
            email,
            phone,
            enquiryType,
            message
        });
        return response.data;
    } catch (error) {
        console.error('Error submitting form:', error);
        if (error.response) {
            console.error('Error response data:', error.response.data);
        }
        throw error;
    }
}