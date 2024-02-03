import { defineStore } from 'pinia';
import type { LoginRequest } from '@/types/LoginRequest';
import type { LoginResponse, ErrorResponse } from '@/types/ResponseTypes';
import authService from '@/services/auth.service';

type InitialState = {
    loggedIn: boolean;
    token: string|null;
}

const token: string|null = localStorage.getItem('token');
const initialState: InitialState = token ? { loggedIn: true, token: token} : { loggedIn: false, token: null};

export const useAuthStore = defineStore('authStore', {
    state: () => (initialState),
    actions: {
        register(registerForm: any)
        {
            console.log(registerForm);
        },
        async login(loginForm: LoginRequest)
        {
            return authService.login(loginForm).then(
                (response: LoginResponse) => {
                    
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('user_id', response.user_id.toString());

                    this.loggedIn = true;
                    this.token = response.token;
                    return response;

                }).catch((err: ErrorResponse) => {
                    throw err;
                }
            )
        },
        logout()
        {
            localStorage.removeItem('token');
            localStorage.removeItem('user_id');
            this.loggedIn = false;
            this.token = null;
        }
    }
})