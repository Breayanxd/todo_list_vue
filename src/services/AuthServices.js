import apiClient from "./ApiClient";

export const registerUser = async (userData) =>{
    console.log(userData);
    
    const response = await apiClient.post('/register', userData)
    return response.data;
}

