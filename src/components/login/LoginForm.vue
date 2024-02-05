<script setup lang="ts">
import { ref, type Ref, reactive } from 'vue';
import {useAuthStore} from '@/store/authStore';
import { useRouter } from 'vue-router';
import type { LoginRequest } from '@/types/RequestTypes';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

const form: LoginRequest = reactive({
    email: '',
    password: ''
})
const v$ = useVuelidate({
    email: { required, email },
    password: { required }
}, form);

let errorMsg: Ref<string> = ref('');

const router = useRouter();
const authStore = useAuthStore();

async function handleSubmit(){
    v$.value.$touch();
    if (!v$.value.$invalid) {
        authStore.login({email: form.email, password: form.password}).then(
            () => {
                if (authStore.loggedIn === true) {
                    router.push('/profile');
                }
            }
        ).catch((err) => { errorMsg.value = err.message;})
    }
}
</script>

<template>
    <div class="container max-w-[40rem] mx-auto">
        <h1 class="title">Login</h1>
        <form @submit.prevent="handleSubmit()" class="modal">
            <div class="labelInputContainer">
                <label for="email">Email</label>
                <input id="email" type="email" v-model="form.email" placeholder="example@given.com">
                <span v-if="v$.email.$errors[0]" class="error">{{ v$.email.$errors[0].$message }}</span>
            </div>
            <div class="labelInputContainer">
                <label for="password">Password</label>
                <input id="password" type="password" v-model="form.password" placeholder="password">
                <span v-if="v$.password.$errors[0]" class="error">{{ v$.password.$errors[0].$message }}</span>
            </div>
            <span class="error">{{ errorMsg }}</span>
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