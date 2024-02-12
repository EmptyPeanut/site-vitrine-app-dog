<script setup lang="ts">
import adminUserService from '@/services/admin/admin.user.service';
import { onBeforeUnmount, Ref, onMounted, ref } from 'vue';
import UserGridLine from '@/components/admin/UserGridLine.vue';

const users: Ref<any[]> = ref([]);
const usersGrid: Ref<any> = ref(null);
const emailInput: Ref<string|null> = ref(null);
const pseudoInput: Ref<string|null> = ref(null);
let noMoreResults: boolean = false;

const count: Ref<number> = ref(1);
const limit = 20;

async function getUsers() {
    count.value = 1;
    adminUserService.getUserIhm(emailInput.value, pseudoInput.value, limit).then(
        response => {
            users.value = response?.users;
        }
    );
}

async function pushUsers(offset: number) {
    adminUserService.getUserIhm(null, null, limit, offset).then(
        response => {
            users.value.push(...response?.users);
        }
    );
}

async function detectedScroll(event) {
    const previousUsersCount = users.value.count;
    const usersGrid = document.getElementById('usersGrid');
    if (usersGrid.scrollTop + usersGrid.clientHeight >= usersGrid.scrollHeight) {
        if (!noMoreResults) {
            await pushUsers(count.value * limit);
            count.value++;
        }
        if (users.value.count === previousUsersCount) {
            noMoreResults = true;
        }
    }
}

onMounted(async () => {
    await getUsers();
    document.getElementById('usersGrid').addEventListener('scroll', async (event) => await detectedScroll(event))
})
onBeforeUnmount(() => {
    document.getElementById('usersGrid').removeEventListener('scroll', async (event) => await detectedScroll(event))
})

</script>

<template>
    <div class="flex flex-row items-end h-[8rem] bg-slate-100 border-b-2 border-slate-200">
        <div class="userGrid items-end mb-2 px-5">
            <div><span class="font-semibold text-xs text-slate-400">Id</span></div>
            <div class="labelInputContainerAdmin">
                <input v-model="emailInput" id="email" type="text" placeholder="Email" @input="getUsers()"/>
                <span class="font-semibold text-xs text-slate-400">Email</span>
            </div>
            <div class="labelInputContainerAdmin">
                <input v-model="pseudoInput" id="pseudo" type="text" placeholder="Pseudo" @input="getUsers()"/>
                <span class="font-semibold text-xs text-slate-400">Pseudo</span>
            </div>
            <div><span class="font-semibold text-xs text-slate-400">First name</span></div>
            <div><span class="font-semibold text-xs text-slate-400">Last name</span></div>
            <div><span class="font-semibold text-xs text-slate-400">Higher role</span></div>

        </div>
    </div>
    <div id="usersGrid" class="h-[calc(100vh-8rem-8rem)] overflow-y-scroll">
        <!-- <RouterLink :to="{name: 'userDetails', param: { id: 1} }">
            <UserGridLine v-for="user in users" :userData="user"/>
        </RouterLink> -->
        <UserGridLine v-for="user in users" :userData="user"/>
    </div>
</template>