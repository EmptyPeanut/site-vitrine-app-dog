<script setup lang="ts">

const props = defineProps(['name'])
</script>

<template>
    <div class="bg-slate-300 text-white p-10 mt-10 mb-0 rounded-md">
        <h1 class="text-2xl">Hello, <span class="text-3xl font-semibold">{{ name }}</span></h1>
    </div>
</template>