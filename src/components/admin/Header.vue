<script setup lang="ts">
const props = defineProps<{
    title: string,
    button?: { label: string, callback: () => void }
}>();
</script>

<template>
    <div class="px-5 flex items-center h-[8rem] bg-slate-50 border-b-2 border-slate-200 justify-between">
        <h1 class="text-3xl">{{ props.title }}</h1>
        <button v-if="button" class="myButton" @click="button?.callback">{{ button?.label }}</button>
    </div>
</template>