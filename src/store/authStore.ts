import { defineStore } from 'pinia';
import type { LoginRequest } from '@/types/LoginRequest';
import type { LoginResponse, ErrorResponse } from '@/types/ResponseTypes';
import authService from '@/services/auth.service';

type InitialState = {
    loggedIn: boolean;
    user: LoginResponse|null;
}

const user: string|null = localStorage.getItem('user');
const initialState: InitialState = user ? { loggedIn: true, user: JSON.parse(user)} : { loggedIn: false, user: null};

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
                    
                    localStorage.setItem('user', JSON.stringify(response));

                    this.loggedIn = true;
                    this.user = response;
                    return response;

                }).catch((err: ErrorResponse) => {
                    throw err;
                }
            )
        },
        logout()
        {
            localStorage.removeItem('user');
            this.loggedIn = false;
            this.user = null;
        }
    }
})