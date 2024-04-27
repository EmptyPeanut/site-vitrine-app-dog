<script setup lang="ts">
const props = defineProps(['eventData']);
</script>


<template>
    <div class="userGrid userGridLine">
        <div>{{ eventData.id }}</div>
        <div>{{ eventData.title }}</div>
        <div>{{ eventData.description }}</div>
        <div>{{ eventData.address.address }}</div>
        <div>{{ eventData.closed }}</div>
        <div>{{ eventData.founder }}</div>
    </div>
</template>