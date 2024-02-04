<script setup lang="ts">

const props = defineProps(['name'])
</script>

<template>
    <div class="bg-slate-300 p-10 mt-10 mb-0 rounded-md">
        <h1 class="text-2xl text-white">Hello, <span class="text-white text-3xl font-semibold">{{ name }}</span></h1>
    </div>
</template>