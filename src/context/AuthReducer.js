

//se valida el tipo de accion recibido y se ejecuta segun corresponda
export const authReducer = (state, action) => {
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