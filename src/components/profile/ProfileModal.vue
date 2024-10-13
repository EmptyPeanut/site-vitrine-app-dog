<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue';
import NameBlock from './NameBlock.vue';
import DogsGrid from './DogsGrid.vue';
import userService from '@/services/user.service'
import type { DogType } from '@/types/DogType';

const data = ref({
    email: '',
    pseudo: '',
    firstName: '',
    lastName: '',
    sex: '',
    birthdate: '',
    dogs: <DogType[]>[]
})

onMounted(() => {
    userService.getPersonalInfos().then(response => {
        data.value.email = response.email;
        data.value.pseudo = response.pseudo;
        data.value.firstName = response.firstName;
        data.value.lastName = response.lastName;
        data.value.sex = response.sex.name;
        if (response.birthdate) {
            data.value.birthdate = new Date(response.birthdate).toLocaleDateString('fr-FR');
        }
        data.value.dogs = response.dogs;
    })
})
</script>

<template>

    <div class="container mx-auto">
        <NameBlock :name="data.firstName"/>

        <h2 class="title">Personal informations</h2>
        <div class="modal">
            <div class="horizontalInputs">
                <div class="labelInputContainer">
                    <label for="email">Email</label>
                    <input id="email" type="email" v-model="data.email">
                </div>
                <div class="labelInputContainer">
                    <label for="pseudo">Pseudo</label>
                    <input id="pseudo" type="text" v-model="data.pseudo">
                </div>
            </div>
            <div class="horizontalInputs">
                <div class="labelInputContainer">
                    <label for="firstName">First Name</label>
                    <input id="firstName" type="text" v-model="data.firstName">
                </div>
                <div class="labelInputContainer">
                    <label for="lastName">Last name</label>
                    <input id="lastName" type="text" v-model="data.lastName">
                </div>
            </div>
            <div class="horizontalInputs">
                <div class="labelInputContainer">
                    <label for="sex">Sex</label>
                    <input id="sex" type="text" v-model="data.sex" disabled>
                </div>
                <div class="labelInputContainer">
                    <label for="birthdate">Birthdate</label>
                    <input id="birthdate" type="text" v-model="data.birthdate" disabled>
                </div>
            </div>
        </div>
        <DogsGrid :dogs="data.dogs"/>
    </div>
</template>