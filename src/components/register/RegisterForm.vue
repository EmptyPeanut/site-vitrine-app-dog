<script setup lang="ts">
import { computed, onMounted, reactive, ref, type Ref } from 'vue';
import sexService from '@/services/sex.service';
import { useAuthStore } from '@/store/authStore';
import type { SexResponse } from '@/types/ResponseTypes';
import router from '@/router';
import type { RegisterRequest } from '@/types/RequestTypes';
import { useVuelidate } from '@vuelidate/core';
import { required, email, numeric, sameAs, minLength } from '@vuelidate/validators';

const errorMsg: Ref<string|null> = ref(null);

const authStore = useAuthStore();
const sexes: Ref<SexResponse[]|null> = ref(null); 
const form = reactive({
    email: '',
    pseudo: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordConfirmation: '',
    sex: {id: undefined},
    birthdate: undefined,
    address: {
        address: undefined,
        zipCode: undefined,
        city: ''
    }
})
const v$ = useVuelidate({
    email: { required, email },
    pseudo: { required },
    firstName: { required },
    lastName: { required },
    password: { required, minLength: minLength(7)},
    passwordConfirmation: { required, minLength: minLength(7), sameAsPassword: sameAs(computed(() => form.password)) },
    sex: {
        id: { required, numeric }
    },
    birthdate: { required },
    address: {
        address: { required },
        zipCode: { required, numeric },
        city: { required }
    }
}, form)

onMounted(() => {
    sexService.getSexes().then(
        response => {
            sexes.value = response;
        }
    )
})

function handleSubmit()
{
    const registerForm: RegisterRequest = {
        email: form.email,
        pseudo: '@' + form.pseudo,
        firstName: form.firstName,
        lastName: form.lastName,
        password: form.password,
        sex: {id: form.sex.id},
        birthdate: form.birthdate,
        address: {
            address: form.address.address,
            zipCode: form.address.zipCode,
            city: form.address.city
        }
    }
    v$.value.$touch();

    if(!v$.value.$invalid){
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
    
}
</script>


<template>
    <div class="container max-w-[40rem] mx-auto">
        <h1 class="title">Register</h1>
        <form class="modal" @submit.prevent="handleSubmit">
            <div class="labelInputContainer" :class="{ error: v$.email.$errors.length }">
                <label for="email">Email*</label>
                <input id="email" type="text" v-model="form.email" placeholder="example@given.com">
                <span v-if="v$.email.$errors[0]" class="error">{{ v$.email.$errors[0].$message }}</span>
            </div>
            <div class="labelInputContainer">
                <label for="pseudo">Pseudo*</label>
                <div class="pseudoContainer">
                    <span>@</span>
                    <input id="pseudo" type="text" v-model="form.pseudo" placeholder="pseudo" required>
                    <span v-if="v$.pseudo.$errors[0]" class="error">{{ v$.pseudo.$errors[0].$message }}</span>
                </div>
            </div>
            <div class="horizontalInputs">
                <div class="labelInputContainer">
                    <label for="firstName">First name*</label>
                    <input id="firstName" type="text" v-model="form.firstName" placeholder="John" required>
                    <span v-if="v$.firstName.$errors[0]" class="error">{{ v$.firstName.$errors[0].$message }}</span>
                </div>
                <div class="labelInputContainer">
                    <label for="lastName">Last name*</label>
                    <input id="lastName" type="text" v-model="form.lastName" placeholder="Doe" required>
                    <span v-if="v$.lastName.$errors[0]" class="error">{{ v$.lastName.$errors[0].$message }}</span>
                </div>
            </div>
            <div class="labelInputContainer">
                <label for="password">Password*</label>
                <input id="password" type="password" v-model="form.password" placeholder="password" required>
                <span v-if="v$.password.$errors[0]" class="error">{{ v$.password.$errors[0].$message }}</span>
            </div>
            <div class="labelInputContainer">
                <label for="passwordConfirmation">Confirm password*</label>
                <input id="passwordConfirmation" type="password" v-model="form.passwordConfirmation" placeholder="password" required>
                <span v-if="v$.passwordConfirmation.$errors[0]" class="error">{{ v$.passwordConfirmation.$errors[0].$message }}</span>
            </div>
            <div class="horizontalInputs">
                <div class="labelInputContainer">
                    <label for="sex">Sex*</label>
                    <select id="sex" v-model="form.sex.id">
                        <option :value="undefined" disabled>Default</option>
                        <option :value="sex.id" v-for="sex of sexes">{{ sex.name }}</option>
                    </select>
                </div>
                <div class="labelInputContainer">
                    <label for="birthdate">Birthdate*</label>
                    <input id="birthdate" type="date" v-model="form.birthdate">
                    <span v-if="v$.birthdate.$errors[0]" class="error">{{ v$.birthdate.$errors[0].$message }}</span>
                </div>
            </div>
            <div class="labelInputContainer">
                <label for="address">Address</label>
                <input id="address" type="text" v-model="form.address.address" placeholder="5 Market street">
                <span v-if="v$.address.$errors[0]" class="error">{{ v$.address.$errors[0].$message }}</span>
            </div>
            <div class="horizontalInputs">
                <div class="labelInputContainer">
                    <label for="zipCode">Zip code*</label>
                    <input id="zipCode" type="number" v-model="form.address.zipCode" placeholder="59000" required>
                    <span v-if="v$.address.zipCode.$errors[0]" class="error">{{ v$.address.zipCode.$errors[0].$message }}</span>
                </div>
                <div class="labelInputContainer">
                    <label for="city">City*</label>
                    <input id="city" type="text" v-model="form.address.city" placeholder="Lille" required>
                    <span v-if="v$.address.city.$errors[0]" class="error">{{ v$.address.city.$errors[0].$message }}</span>
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