import { defineStore } from 'pinia';
import type { LoginRequest, RegisterRequest } from '@/types/RequestTypes';
import type { LoginResponse, ErrorResponse } from '@/types/ResponseTypes';
import authService from '@/services/auth.service';

type InitialState = {
    loggedIn: boolean;
    user: LoginResponse|null;
    role: string[]
}

const user: string|null = localStorage.getItem('user');
const parsedUser: null|LoginResponse = user ? JSON.parse(user) : null;
const initialState: InitialState = parsedUser ? { loggedIn: true, user: parsedUser, role: parsedUser.roles } : { loggedIn: false, user: null, role: []};

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
                    this.role = response.roles;
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
                    this.role = response.roles;
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