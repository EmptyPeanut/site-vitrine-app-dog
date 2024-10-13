import { defineStore } from 'pinia';
import type { LoginResponse } from '@/types/ResponseTypes';
import { ref, type Ref } from 'vue';


export const useAuthStore = defineStore('authStore', () => {
    const user: Ref<null|LoginResponse> = ref(JSON.parse(localStorage.getItem('user') ?? 'null'));


    const setUser = (response: LoginResponse) => {
        user.value = response;
        localStorage.setItem('user', JSON.stringify(response));
    }

    const clearUser = () => {
        user.value = null;
        localStorage.removeItem('user');
    }

    return {
        user,
        setUser,
        clearUser,
    };
})