import axios from 'axios';

const movieDB = axios.create({
    baseURL : 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'c92f8b6ae1d258be3f18a1a6f23a7ec1',
        lenguage: 'es-ES'
    }
})

export default movieDB