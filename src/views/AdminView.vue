
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
    <div class="flex flex-row">
        <div class="leftNav">
            <RouterLink :to="{name: 'users'}">
                <div :class="{ 'active': $route.matched.some(route => route.path.includes('users')) }"><i class="mdi mdi-account-circle-outline mdi-24px"></i></div>
            </RouterLink>
            <RouterLink :to="{name: 'profile'}">
                <div :class="{ 'active': $route.matched.some(route => route.path === '/walks') }"><i class="mdi mdi-walk mdi-24px"></i></div>
            </RouterLink>
            <RouterLink :to="{name: 'profile'}">
                <div :class="{ 'active': $route.matched.some(route => route.path === '/alerts') }"><i class="mdi mdi-alert-circle-outline mdi-24px"></i></div>
            </RouterLink>
        </div>
        <div class="w-full">
            <RouterView/>
        </div>
    </div>
</template>