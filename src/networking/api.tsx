import axios from 'axios';

const api = axios.create({
  baseURL: 'https://662029f13bf790e070af2cd8.mockapi.io/api/v1',
});

export const getPosts = async () => {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export default api;