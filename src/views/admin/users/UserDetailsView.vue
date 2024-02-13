<script setup lang="ts">
import Header from '@/components/admin/Header.vue';
import adminUserService from '@/services/admin/admin.user.service'
import { onMounted, reactive, ref } from 'vue';

const props = defineProps(['userId']);
const userData = reactive({
    pseudo: '',
    firstName: '',
    lastName: ''
})
onMounted(() => {
    adminUserService.getUser(props.userId).then(
        response => {
            userData.firstName = response.firstName;
            userData.lastName = response.lastName;
            userData.pseudo = response.pseudo;
        }
    )
})
const firstName = ref('');
const lastName = ref('');

</script>

<template>
    <Header :title="userData.firstName + ' ' + userData.lastName"/>
</template>