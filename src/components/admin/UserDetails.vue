<script setup lang="ts">
import { type UserDetails } from '@/types/UserDetailsType';
import { onMounted } from 'vue';

const props = defineProps<{user: UserDetails}>();
onMounted(() => {
    console.log(props);
})
</script>

<template>
    <div class="h-[calc(100vh-8rem)] w-full bg-slate-100">
        <div class="userDetailsContainer">
            <div class="userDetailsDataContainer">
                <div>
                    <input type="text" :value="user.firstName">
                </div>
            </div>
        </div>
    </div>
</template>