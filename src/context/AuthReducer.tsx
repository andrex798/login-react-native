import { Usuario } from "../interfaces/appInterfaces";

export interface AuthState {
    status: 'Revisando' | 'Autenticado' | 'Sin-autenticar';
    token: string | null;
    errorMessage: string;
    user: Usuario | null;
}

type AuthAction = 
| { type:'signUp', payload:{token:string,user:Usuario}} //accion de registro e inicio de sesion
| { type:'addError', payload: string} //muestra de errores al usuario
| { type:'removeError'} //limpiar los errores
| { type:'notAuthenticated'} //limpiar valores y dejarlos por defecto
| { type:'logout'} //cerrar sesion


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                user: null,
                status: 'Sin-autenticar',
                token: null,
                errorMessage : action.payload
            }
        case 'removeError':
            return {
                ...state,
                errorMessage : ''
            }
        case 'signUp':
            return {
                ...state,
                errorMessage: '',
                status: 'Autenticado',
                token: action.payload.token,
                user: action.payload.user,
            }
        case 'logout':
        case 'notAuthenticated':
            return {
                ...state,
                status: 'Sin-autenticar',
                token: null,
                user: null,
            }
            
    
        default:
            return state;
    }
}