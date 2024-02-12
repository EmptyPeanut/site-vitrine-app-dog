<script setup lang="ts">
const props = defineProps(['userData']);

</script>


<template>
    <div class="userGrid userGridLine">
        <div>{{ userData.id }}</div>
        <div>{{ userData.email }}</div>
        <div>{{ userData.pseudo }}</div>
        <div>{{ userData.firstName }}</div>
        <div>{{ userData.lastName }}</div>
        <div>{{ userData.roles[0] ?? '--' }}</div>
    </div>
</template>