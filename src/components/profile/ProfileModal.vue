<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue';
import NameBlock from './NameBlock.vue';
import DogsGrid from './DogsGrid.vue';
import userService from '@/services/user.service'
import type { DogType } from '@/types/DogType';

let email: Ref<string|null> = ref('');
let pseudo: Ref<string|null> = ref('');
let firstName: Ref<string|null> = ref('');
let lastName: Ref<string|null> = ref('');
let sex: Ref<string|null> = ref('');
let birthdate: Ref<string|null> = ref('');
let dogs: Ref<DogType[]|[]> = ref([]);


onMounted(() => {
    userService.getPersonalInfos().then(response => {
        email.value = response.email;
        pseudo.value = response.pseudo;
        firstName.value = response.firstName;
        lastName.value = response.lastName;
        sex.value = response.sex.name;
        if (response.birthdate) {
            birthdate.value = new Date(response.birthdate).toLocaleDateString('fr-FR');
        }
        dogs.value = response.dogs;
    })
})
</script>

<template>

    <div class="container mx-auto">
        <NameBlock :name="firstName"/>

        <h2 class="title">Personal informations</h2>
        <div class="modal">
            <div class="horizontalInputs">
                <div class="labelInputContainer">
                    <label for="email">Email</label>
                    <input id="email" type="email" v-model="email">
                </div>
                <div class="labelInputContainer">
                    <label for="pseudo">Pseudo</label>
                    <input id="pseudo" type="text" v-model="pseudo">
                </div>
            </div>
            <div class="horizontalInputs">
                <div class="labelInputContainer">
                    <label for="firstName">First Name</label>
                    <input id="firstName" type="text" v-model="firstName">
                </div>
                <div class="labelInputContainer">
                    <label for="lastName">Last name</label>
                    <input id="lastName" type="text" v-model="lastName">
                </div>
            </div>
            <div class="horizontalInputs">
                <div class="labelInputContainer">
                    <label for="sex">Sex</label>
                    <input id="sex" type="text" v-model="sex" disabled>
                </div>
                <div class="labelInputContainer">
                    <label for="birthdate">Birthdate</label>
                    <input id="birthdate" type="text" v-model="birthdate" disabled>
                </div>
            </div>
        </div>
        <DogsGrid :dogs="dogs"/>
    </div>
</template>