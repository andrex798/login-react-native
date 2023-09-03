// interfaces de las diferentes estructuras de datos utilizadas en el aplicativo
export interface LoginData {
    email: string,
    password: string
}

export interface RegisterData {
    name: string,
    email: string,
    password: string
}

export interface LoginResponse {
    message:      string;
    access_token: string;
    token_type:   string;
    user:         Usuario
    
}

export interface Usuario {
    id:                number;
    name:              string;
    email:             string;
    email_verified_at?: null;
    created_at:        string;
    updated_at:        string;
}
