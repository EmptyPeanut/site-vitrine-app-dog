<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

/** @faire la page register */
<template>
    <div class="backdrop-blur-md sticky top-0 flex flex-row items-center p-5 bg-background-primary-color/20">
        <div class="flex flex-1 justify-start font-semibold">
            <RouterLink to="/"><span class="hover:cursor-pointer">DOG-APP</span></RouterLink>
        </div>
        <div class="flex flex-1 justify-end gap-5 items-center">
            <RouterLink to="/register">
                <div class="hover:cursor-pointer  text-green-button-border-color">
                    Register
                </div>
            </RouterLink>
            <RouterLink to="/login">
                <div class="hover:cursor-pointer px-3 py-2 border-2 rounded-md border-green-button-border-color border-b-4 text-green-button-text-color bg-green-button-bg-color">
                    Login
                </div>
            </RouterLink>
        </div>
        
    </div>
</template>