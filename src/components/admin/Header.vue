<script setup lang="ts">
const props = defineProps(['title']);
</script>

<template>
    <div class="px-5 flex items-center h-[8rem] bg-slate-50 border-b-2 border-slate-200">
        <h1 class="text-3xl">{{ props.title }}</h1>
    </div>
</template>