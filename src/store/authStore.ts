import { defineStore } from 'pinia';
import type { LoginRequest, RegisterRequest } from '@/types/RequestTypes';
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
        async register(registerForm: RegisterRequest)
        {
            return authService.register(registerForm).then(
                response => {
                    localStorage.setItem('user', JSON.stringify(response));

                    this.loggedIn = true;
                    this.user = response;
                    return response;
                }
            ).catch(err => {
                return Promise.reject(err);
            })
            
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
                    return Promise.reject(err);
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