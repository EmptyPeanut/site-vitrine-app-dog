import type { LoginRequest } from "@/types/LoginRequest";
import type { LoginResponse, ErrorResponse } from "@/types/ResponseTypes";
import axios from "axios";

const API_URL: string = 'http://localhost:3000/api';

class AuthService
{
    public login(user: LoginRequest)
    {
        return axios.post(API_URL + '/customer/login', {
            email: user.email,
            password: user.password
        }).then(
            (response) => {
                const data: LoginResponse = response.data;
                return data;

            }).catch((err) => {
                const errorBody: ErrorResponse = err.response.data;
                throw errorBody;
            }
        )
    }

    public logout()
    {
        localStorage.removeItem('token');
    }

    /** @todo créer le type de création de compte */
    public register(user: any)
    {
        return axios.post(API_URL + '/customer/register', {
            pseudo: user.pseudo
            // ...
        })
    }
}

export default new AuthService()