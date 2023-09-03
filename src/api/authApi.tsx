import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//endpoint laravel
const baseURL = 'http://192.168.0.3/prueba/public/api';

const authApi = axios.create({baseURL});

//configura los headers para enviar el token en las peticiones que solicitan token
authApi.interceptors.request.use(
    async(config) => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            config.headers['Authorization']='Bearer '+token
        }

        return config;
    }
    
)

export default authApi;