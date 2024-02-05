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
    if (email.value == '' || password.value == '') {
        errorMsg.value = 'Can\'t leave empty fields';
        return;
    }
    if (!email.value.includes('@') || !email.value.includes('.')) {
        errorMsg.value = 'Invalid email address';
        return;
    }
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
        <h1 class="title">Login</h1>
        <form @submit.prevent="handleSubmit()" class="modal">
            <div class="labelInputContainer">
                <label for="email">Email</label>
                <input id="email" type="email" v-model="email" placeholder="example@given.com">
            </div>
            <div class="labelInputContainer">
                <label for="password">Password</label>
                <input id="password" type="password" v-model="password" placeholder="password">
                <span class=" font-light text-red-500 text-sm">{{ errorMsg }}</span>
            </div>
            <div class="flex flex-row w-full justify-end">
                <button
                    class="myButton"
                    type="submit">
                    Confirm
                </button>
            </div>
        </form>
    </div>
</template>