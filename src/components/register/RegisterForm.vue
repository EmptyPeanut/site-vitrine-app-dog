<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import sexService from '@/services/sex.service';
import { useAuthStore } from '@/store/authStore';
import type { SexResponse } from '@/types/ResponseTypes';
import router from '@/router';

const sexes: Ref<SexResponse[]|null> = ref(null); 
const email: Ref<string> = ref('');
const pseudo: Ref<string> = ref('');
const firstName: Ref<string> = ref('');
const lastName: Ref<string> = ref('');
const password: Ref<string> = ref('');
const passwordConfirmation: Ref<string> = ref('');
const sex: Ref<number|null> = ref(null);
const birthdate: Ref<string|null> = ref(null);
const address: Ref<string|null> = ref(null);
const zipCode: Ref<string|null> = ref(null);
const city: Ref<string|null> = ref(null);
const errorMsg: Ref<string|null> = ref(null);

const authStore = useAuthStore();
onMounted(() => {
    sexService.getSexes().then(
        response => {
            sexes.value = response;
        }
    )
})
function handleSubmit(){

    const registerForm = {
        email: email.value,
        pseudo: '@' + pseudo.value,
        firstName: firstName.value,
        lastName: lastName.value,
        password: password.value,
        sex: {id: sex.value},
        birthdate: birthdate.value,
        address: {
            address: address.value,
            zipCode: zipCode.value,
            city: city.value
        }
    }
    
    authStore.register(registerForm).then(
        response => {
            router.push('/profile');
        }
    ).catch(
        err => {
            errorMsg.value = err.message;
        }
    );
}
</script>


<template>
    <div class="container max-w-[40rem] mx-auto">
        <h1 class="title">Register</h1>
        <form class="modal" @submit.prevent="handleSubmit">
            <div class="labelInputContainer">
                <label for="email">Email*</label>
                <input id="email" type="email" v-model="email" placeholder="example@given.com" required>
            </div>
            <div class="labelInputContainer">
                <label for="pseudo">Pseudo*</label>
                <div class="pseudoContainer">
                    <span>@</span>
                    <input id="pseudo" type="text" v-model="pseudo" placeholder="pseudo" required>
                </div>
            </div>
            <div class="horizontalInputs">
                <div class="labelInputContainer">
                    <label for="firstName">First name*</label>
                    <input id="firstName" type="text" v-model="firstName" placeholder="John" required>
                </div>
                <div class="labelInputContainer">
                    <label for="lastName">Last name*</label>
                    <input id="lastName" type="text" v-model="lastName" placeholder="Doe" required>
                </div>
            </div>
            <div class="labelInputContainer">
                <label for="password">Password*</label>
                <input id="password" type="password" v-model="password" placeholder="password" required>
            </div>
            <div class="labelInputContainer">
                <label for="passwordConfirmation">Confirm password*</label>
                <input id="passwordConfirmation" type="password" v-model="passwordConfirmation" placeholder="password" required>
            </div>
            <div class="horizontalInputs">
                <div class="labelInputContainer">
                    <label for="sex">Sex*</label>
                    <select id="sex" v-model="sex">
                        <option :value="null" disabled>Default</option>
                        <option :value="sex.id" v-for="sex of sexes">{{ sex.name }}</option>
                    </select>
                </div>
                <div class="labelInputContainer">
                    <label for="birthdate">Birthdate</label>
                    <input id="birthdate" type="date" v-model="birthdate">
                </div>
            </div>
            <div class="labelInputContainer">
                <label for="address">Address</label>
                <input id="address" type="text" v-model="address" placeholder="5 Market street">
            </div>
            <div class="horizontalInputs">
                <div class="labelInputContainer">
                    <label for="zipCode">Zip code*</label>
                    <input id="zipCode" type="number" v-model="zipCode" placeholder="59000" required>
                </div>
                <div class="labelInputContainer">
                    <label for="city">City*</label>
                    <input id="city" type="text" v-model="city" placeholder="Lille" required>
                </div>
            </div>
            <span class=" font-light text-red-500 text-sm">{{ errorMsg }}</span>
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