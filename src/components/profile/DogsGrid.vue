<script setup lang="ts">
import { type DogType } from '@/types/DogType';

const props: {readonly dogs?: DogType[]} = defineProps(['dogs']);
</script>

<template>
    <h2 class="title">Dogs</h2>
    <div class="dogsGrid">
        <div class="dogGridCase" v-for="(dog, index) in dogs">
            <div class="labelInputContainer">
                <label :for="'name'+index">Nom</label>
                <input :id="'name'+index" v-model="dog.name"/>
            </div>
            <div class="labelInputContainer">
                <label :for="'birthdate'+index">Birthdate</label>
                <input :id="'birthdate'+index" type="date" v-model="dog.birthdate"/>
            </div>
            <!-- <div class="labelInputContainer">
                <label :for="'name'+index">Nom</label>
                <input :id="'name'+index" v-model="dog.name"/>
            </div> -->
        </div>
    </div>
</template>