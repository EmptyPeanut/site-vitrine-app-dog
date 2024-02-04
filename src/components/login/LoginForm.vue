<script setup lang="ts">
import { ref, type Ref } from 'vue';
import {useAuthStore} from '@/store/authStore';
import { useRouter } from 'vue-router';

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
let errorMsg: Ref<string> = ref('');

const router = useRouter();
const authStore = useAuthStore();
async function handleSubmit(){
    authStore.login({email: email.value, password: password.value}).then(
        () => {
            if (authStore.loggedIn === true) {
                router.push('/profile');
            }
        }
    ).catch((err) => { errorMsg.value = err.message;})
    
}
</script>

<template>
    <div class="container max-w-[40rem] mx-auto">
        <form @submit.prevent="handleSubmit()" class="flex flex-col items-center justify-center">
            <div class="modal">
                <div class="flex flex-col gap-2 align-top">
                    <label for="email" class=" text-green-button-bg-color">Email</label>
                    <input id="email" type="email" v-model="email" placeholder="example@given.com" class="p-2 bg-input-bg-color rounded-md">
                </div>
                <div class="flex flex-col gap-2 align-top">
                    <label for="password" class=" text-green-button-bg-color">Password</label>
                    <input id="password" type="password" v-model="password" placeholder="password" class="p-2 bg-input-bg-color rounded-md">
                    <span class=" font-light text-red-500 text-sm">{{ errorMsg }}</span>
                </div>
                <div class="flex flex-row w-full justify-end">
                    <button
                        class="hover:cursor-pointer px-3 py-2 border-2 rounded-md border-green-button-border-color border-b-4 text-green-button-text-color bg-green-button-bg-color"
                        type="submit">
                        Confirm
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>