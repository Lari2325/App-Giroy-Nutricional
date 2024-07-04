import axios from 'axios';

const API_URL = 'http://192.168.15.31:3000';

const login = async (email: string, senha: string): Promise<string> => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, senha });
    return response.data.token;
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};

export default {
  login
};