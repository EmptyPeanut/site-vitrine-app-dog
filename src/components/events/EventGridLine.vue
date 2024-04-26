<script setup lang="ts">
const props = defineProps(['EventData']);

</script>


<template>
    <div class="userGrid userGridLine">
        <div>{{ EventData.title }}</div>
        <div>{{ EventData.description }}</div>
        <div>{{ EventData.maxPeople }}</div>
        <div>{{ EventData.address }}</div>
        <div>{{ EventData.closed }}</div>
        <div>{{ EventData.founder }}</div>
    </div>
</template>