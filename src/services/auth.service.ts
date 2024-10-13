import { useAuthStore } from "@/store/authStore";
import type { LoginRequest, RegisterRequest } from "@/types/RequestTypes";
import type { LoginResponse, ErrorResponse } from "@/types/ResponseTypes";
import axios from "axios";

const API_URL: string = 'http://localhost:3000/api';
const authStore = useAuthStore();


export const useAuthService = () => {
    const login = async(user: LoginRequest) => {
        return axios.post(API_URL + '/customer/login', {
            email: user.email,
            password: user.password
        }).then(
            (response) => {
                authStore.setUser(response.data);
                return <LoginResponse>response.data;
            }
        ).catch((err) => {
                return Promise.reject(err.response.data as ErrorResponse);
            }
        )
    }

    const register = async (registerForm: RegisterRequest) => {
        return axios.post(API_URL + '/customer', registerForm).then(
            response => {
                authStore.setUser(response.data);
                return <LoginResponse>response.data;
            }
        ).catch(
            error => {
                return Promise.reject(error.response.data as ErrorResponse)
            }
        )
    }

    const logout = () => {
        authStore.clearUser();
    }
}