<script setup lang="ts">
import { ref } from 'vue';

const email: string = ref('');
const password: string = ref('');
</script>

<template>
    <div class="flex flex-col mt-52 items-center">
        <div class="flex flex-col gap-5 bg-white p-10 px-20 border-2 border-b-4 border-modal-border-color rounded-md">
            <div class="flex flex-col gap-2 align-top">
                <label for="email" class=" text-green-button-bg-color">Email</label>
                <input id="email" type="email" v-model="email" placeholder="example@given.com" class="p-2 bg-input-bg-color rounded-md">
            </div>
            <div class="flex flex-col gap-2 align-top w-[32rem]">
                <label for="password" class=" text-green-button-bg-color">Password</label>
                <input id="password" type="password" v-model="password" placeholder="password" class="p-2 bg-input-bg-color rounded-md">
            </div>
        </div>
    </div>
</template>