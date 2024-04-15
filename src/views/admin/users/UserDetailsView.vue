<script setup lang="ts">
import Header from '@/components/admin/Header.vue';
import UserDetailsVue from '@/components/admin/UserDetails.vue';
import adminUserService from '@/services/admin/admin.user.service'
import { type UserDetails } from '@/types/UserDetailsType';
import { onMounted, reactive, ref } from 'vue';

const props = defineProps(['userId']);
const userData = reactive<UserDetails>({
    id: undefined,
    pseudo: undefined,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    birthdate: undefined,
    address: undefined,
    zipCode: undefined,
    city: undefined,
    notifyFriends: undefined,
    dogs: undefined
})
onMounted(() => {
    adminUserService.getUser(props.userId).then(
        response => {
            userData.id = response.id;
            userData.firstName = response.firstName;
            userData.lastName = response.lastName;
            userData.pseudo = response.pseudo;
            userData.email = response.email;
            userData.birthdate = response.birthdate;
            // userData.address = response.address.address;
            // userData.zipCode = response.address.zipCode;
            // userData.city = response.address.city;
            userData.notifyFriends = response.notifyFriends;
            userData.dogs = response.dogs;
        }
    )
})

</script>

<template>
    <Header :title="userData.firstName + ' ' + userData.lastName" :button="{label: 'Delete', callback: () => {console.log('Suppression')}}"/>
    <UserDetailsVue :user="userData"/>
</template>