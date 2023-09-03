import React, {createContext, useEffect, useReducer} from 'react';
import { LoginData, LoginResponse, RegisterData, Usuario } from '../interfaces/appInterfaces';
import { AuthState, authReducer } from './AuthReducer';
import authApi from '../api/authApi';
import AsyncStorage from '@react-native-async-storage/async-storage';


{/* estrutura que tiene la respuesta json desde laravel */}
type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'Revisando' | 'Autenticado' | 'Sin-autenticar';
    signUp: (loginData: RegisterData) => void;
    signIn: (loginData: LoginData) => void;
    logout: () => void;
    removeError: () => void;
}
//se define el estado inicial de la aplicacion 
const AuthInitialState: AuthState = {
    status: 'Revisando',
    token: null,
    user: null,
    errorMessage: ''

}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
    //lanza las acciones que se han definido
    const [state, dispatch] = useReducer(authReducer, AuthInitialState);
    //efecto para consultar el token en dado caso de que exista
    useEffect(() => {
      checkToken();
    }, [])

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');
        //si no hay token se dispara el evento de no autenticado
        if(!token) return dispatch({type: 'notAuthenticated'});
        //solicitud al backend para validar si el token existe
        const resp = await authApi.get('/checkToken')
        dispatch({
            type:'signUp',
            payload: {
                token: resp.data.access_token,
                user:resp.data.user
            }
        })


    }
    
    //dispara el evento de inicio de sesion
    const signIn = async ({email, password}: LoginData) => {
        try {
            const resp = await authApi.post<LoginResponse>('/login', {email, password})
            dispatch({
                type: 'signUp', 
                payload:{
                    token: resp.data.access_token,
                    user: resp.data.user
                }
            });

            await AsyncStorage.setItem('token', resp.data.access_token);


        } catch (error) {
            console.log(error.response.data)
            dispatch({
                type:'addError', 
                payload: error.response.data.message || 'Datos Incorrectos',
            })
        }
    };
    //dispara el evento de registro de usuario
    const signUp = async({email, password, name}: RegisterData) => {
        try {
            const resp = await authApi.post<LoginResponse>('/register', {email, password, name})
            dispatch({
                type: 'signUp', 
                payload:{
                    token: resp.data.access_token,
                    user: resp.data.user
                }
            });

            await AsyncStorage.setItem('token', resp.data.access_token);


        } catch (error) {
            //console.log(error)
            dispatch({
                type:'addError', 
                payload: 'Revise los datos',
            })
        }
    };
    //dispara el evento de cierre de sesion
    const logout = async() => {
        await AsyncStorage.removeItem('token');
        dispatch({type: 'logout'})
    };
    //dispara el evento para limpiar los errores despues de cada peticion
    const removeError = () => {
        dispatch({type: 'removeError'})
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logout,
            removeError,
        }}>
            { children }
        </AuthContext.Provider>
    )
}