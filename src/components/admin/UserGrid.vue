<script setup lang="ts">
import adminUserService from '@/services/admin/admin.user.service';
import { type Ref, onMounted, ref } from 'vue';

const users: Ref<any[]> = ref([]);

async function getUsers() {
    adminUserService.getUserIhm().then(
        response => {
            users.value = response?.users;
            console.log(response);
            
        }
    );
}

onMounted(async () => {
    await getUsers();
})

</script>

<template>
    <div v-for="user in users">
        {{ user.id }} | {{ user.roles }} | {{ user.email }}
    </div>
</template>