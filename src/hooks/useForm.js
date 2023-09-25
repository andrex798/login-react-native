import { useState } from 'react';
//hook para menjar formularios del aplicativo
export const useForm = ( initState ) => {
    
    const [state, setState] = useState( initState );

    const onChange = ( value, field ) => {
        setState({
            ...state,
            [field]: value
        });
    }

    return {
        ...state,
        form: state,
        onChange,
    }

}