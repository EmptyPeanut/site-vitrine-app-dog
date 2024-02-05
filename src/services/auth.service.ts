import type { LoginRequest, RegisterRequest } from "@/types/RequestTypes";
import type { LoginResponse, ErrorResponse } from "@/types/ResponseTypes";
import axios from "axios";

const API_URL: string = 'http://localhost:3000/api';

class AuthService
{
    public async login(user: LoginRequest)
    {
        return axios.post(API_URL + '/customer/login', {
            email: user.email,
            password: user.password
        }).then(
            (response) => {
                return response.data as LoginResponse;

            }).catch((err) => {
                return Promise.reject(err.response.data as ErrorResponse);
            }
        )
    }

    public async logout()
    {
        localStorage.removeItem('token');
    }

    public register(registerForm: RegisterRequest)
    {
        return axios.post(API_URL + '/customer', registerForm).then(
            response => {
                return response.data as LoginResponse;
            }
        ).catch(
            error => {
                return Promise.reject(error.response.data as ErrorResponse)
            }
        )
    }
}

export default new AuthService()