
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
    <div class="h-screen bg-slate-50">
        <div class="flex flex-row h-full">
            <div class="leftNav bg-slate-50">
                <RouterLink :to="{name: 'home'}">
                    <div><i class="mdi mdi-home-export-outline mdi-24px"></i></div>
                </RouterLink>
                <RouterLink :to="{name: 'users'}">
                    <div :class="{ 'active': $route.matched.some(route => route.path.includes('user')) }"><i class="mdi mdi-account-circle-outline mdi-24px"></i></div>
                </RouterLink>
                <RouterLink :to="{name: 'profile'}">
                    <div :class="{ 'active': $route.matched.some(route => route.path === '/walks') }"><i class="mdi mdi-walk mdi-24px"></i></div>
                </RouterLink>
                <RouterLink :to="{name: 'profile'}">
                    <div :class="{ 'active': $route.matched.some(route => route.path === '/alerts') }"><i class="mdi mdi-alert-circle-outline mdi-24px"></i></div>
                </RouterLink>
            </div>
            <div class="w-full h-full">
                <RouterView/>
            </div>
        </div>
    </div>
</template>