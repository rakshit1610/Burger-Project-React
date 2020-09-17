import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-ea97d.firebaseio.com/'
});

export default instance;