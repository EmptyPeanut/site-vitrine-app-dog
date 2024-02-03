<script setup lang="ts">
import { ref, type Ref, onMounted, watch } from 'vue';
import NameBlock from './NameBlock.vue';
import userService from '@/services/user.service'

let email: Ref<string|null> = ref('');
let pseudo: Ref<string|null> = ref('');
let firstName: Ref<string|null> = ref('');
let lastName: Ref<string|null> = ref('');

/** @todo Créer une erreur */
onMounted(() => {
    userService.getPersonalInfos().then(response => {
        console.log(response);
        email.value = response.email;
        pseudo.value = response.pseudo;
        firstName.value = response.firstName;
        lastName.value = response.lastName;
    })
})
</script>

<template>

    <div class="sm:container mx-auto">
        <NameBlock :name="firstName"/>
        <div class="modal">
            <div class="flex flex-row gap-10 items-center justify-center w-full">
                <div class="flex flex-col gap-2 align-top w-full">
                    <label for="email" class=" text-green-button-bg-color">Email</label>
                    <input id="email" type="email" v-model="email" class="p-2 bg-input-bg-color rounded-md">
                </div>
                <div class="flex flex-col gap-2 align-top w-full">
                    <label for="pseudo" class=" text-green-button-bg-color">Pseudo</label>
                    <input id="pseudo" type="text" v-model="pseudo" class="p-2 bg-input-bg-color rounded-md">
                </div>
            </div>
            <div class="flex flex-row gap-10 items-center justify-center w-full">
                <div class="flex flex-col gap-2 align-top w-full">
                    <label for="firstName" class=" text-green-button-bg-color">First Name</label>
                    <input id="firstName" type="text" v-model="firstName" class="p-2 bg-input-bg-color rounded-md">
                </div>
                <div class="flex flex-col gap-2 align-top w-full">
                    <label for="lastName" class=" text-green-button-bg-color">Last name</label>
                    <input id="lastName" type="text" v-model="lastName" class="p-2 bg-input-bg-color rounded-md">
                </div>
            </div>
        </div>
    </div>
</template>