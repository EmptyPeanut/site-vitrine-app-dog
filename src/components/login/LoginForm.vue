<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');

let errorMsg: Ref<string|null> = ref(null);
const router = useRouter();

async function handleSubmit(){
    const response = await fetch('http://localhost:3000/api/customer/login', {
        headers: {
            "Content-type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify({
            "email": email.value,
            "password": password.value
        })
    })
    const data = await response.json();
    if (response.status !== 200) {
        errorMsg = data.message;
        return;
    }
    localStorage.setItem('token', data.token);
    localStorage.setItem('user_id', data.user_id);
    router.push('/profile');
    
}
</script>

<template>
    <div class="flex flex-col mt-52 items-center gap-10">
        <div class="flex flex-col gap-5 bg-white p-10 px-20 border-2 border-b-4 border-modal-border-color rounded-md">
            <div class="flex flex-col gap-2 align-top">
                <label for="email" class=" text-green-button-bg-color">Email</label>
                <input id="email" type="email" v-model="email" placeholder="example@given.com" class="p-2 bg-input-bg-color rounded-md">
            </div>
            <div class="flex flex-col gap-2 align-top w-[32rem]">
                <label for="password" class=" text-green-button-bg-color">Password</label>
                <input id="password" type="password" v-model="password" placeholder="password" class="p-2 bg-input-bg-color rounded-md">
                <span class=" font-light text-red-500 text-sm">{{ errorMsg }}</span>
            </div>
        </div>
        <div>
            <button
                class="hover:cursor-pointer px-3 py-2 border-2 rounded-md border-green-button-border-color border-b-4 text-green-button-text-color bg-green-button-bg-color"
                @click="handleSubmit()">
                Confirm
            </button>
        </div>
    </div>
</template>