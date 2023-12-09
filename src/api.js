import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'beab6c0b252705afa5f8cc6b5b3c7d57';

export const getTrendingMovies = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.result;
  };
  
  export const getMovieByQuery = async query => {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}`);
    return response.data.result;
  };
  
  export const getMovieById = async movieId => {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  };
  
  export const getCastMovie = async movieId => {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data.cast;
  };
  export const getReviewsMovie = async movieId => {
    const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data.result;
  };