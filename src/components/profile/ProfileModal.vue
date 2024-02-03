<script setup lang="ts">
import { onBeforeMount } from 'vue';

onBeforeMount(async () => {
    const userId = localStorage.getItem('user_id');
    const userToken = localStorage.getItem('token');
    const response = await fetch('http://localhost:3000/api/customer/personal-infos/'+ userId, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer '+ userToken
        }
    })
    const data = await response.json();
    console.log(data);
    
})
</script>

<template>
    <div class="sm:container mx-auto">
        <div class="w-full flex flex-col gap-5 bg-white p-10 px-20 border-2 border-b-4 border-modal-border-color rounded-md mt-[5rem]">
            <div class="flex flex-row gap-10 items-center justify-center w-full">
                <div class="flex flex-col gap-2 align-top w-full">
                    <label for="email" class=" text-green-button-bg-color">Email</label>
                    <input id="email" type="email" placeholder="example@given.com" class="p-2 bg-input-bg-color rounded-md">
                </div>
                <div class="flex flex-col gap-2 align-top w-full">
                    <label for="pseudo" class=" text-green-button-bg-color">Pseudo</label>
                    <input id="pseudo" type="email" placeholder="example@given.com" class="p-2 bg-input-bg-color rounded-md">
                </div>

            </div>
        </div>
    </div>
</template>