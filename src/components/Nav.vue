<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/store/authStore';

const { user, clearUser } = useAuthStore();

</script>

<template>
    <div class="backdrop-blur-md sticky top-0 flex flex-row items-center p-5 bg-background-primary-color/20">
        <div class="flex flex-1 justify-start font-semibold">
            <RouterLink to="/"><span class="hover:cursor-pointer">DOG-APP</span></RouterLink>
        </div>
        <div v-if="!user" class="flex flex-1 justify-end gap-5 items-center">
            <RouterLink to="/register">
                <div class="hover:cursor-pointer  text-green-button-border-color">
                    Register
                </div>
            </RouterLink>
            <RouterLink to="/login">
                <button class="myButton">
                    Login
                </button>
            </RouterLink>
        </div>
        <div v-if="user" class="flex flex-1 justify-end gap-5 items-center">
            <RouterLink to="/">
                <div @click="clearUser" class="hover:cursor-pointer  text-green-button-border-color">
                    Disconnect
                </div>
            </RouterLink>
            <RouterLink v-if="user.roles?.includes('ADMIN')" to="/admin">
                <div class="hover:cursor-pointer text-green-button-border-color px-3 py-2 border-[2px] border-green-button-border-color rounded-md">
                    Admin
                </div>
            </RouterLink>
            <RouterLink to="/profile">
                <button class="myButton">
                    Profile
                </button>
            </RouterLink>
        </div>
        
    </div>
</template>