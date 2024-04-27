<script setup lang="ts">
import adminEventService from '@/services/admin/admin.event.service';
import { onBeforeUnmount, Ref, onMounted, ref } from 'vue';
import EventGridLine from '@/components/events/EventGridLine.vue';

const events: Ref<any[]> = ref([]);
const eventsGrid: Ref<any> = ref(null);
const titleInput: Ref<string|null> = ref(null);
const descriptionInput: Ref<string|null> = ref(null);
let noMoreResults: boolean = false;

const count: Ref<number> = ref(1);
const limit = 20;

async function getEvents() {
    count.value = 1;
    adminEventService.getAllEvents(titleInput.value, descriptionInput.value, limit, 0).then(
        response => {
            events.value = response?.events;
        }
    );
}

async function pushEvents(offset: number) {
    adminEventService.getAllEvents(null, null, limit, offset).then(
        response => {
            events.value.push(...response?.events);
        }
    );
}

async function detectedScroll(event) {
    const previousEventsCount = events.value.count;
    const eventsGrid = document.getElementById('eventsGrid');
    if (eventsGrid.scrollTop + eventsGrid.clientHeight >= eventsGrid.scrollHeight) {
        if (!noMoreResults) {
            await pushEvents(count.value * limit);
            count.value++;
        }
        if (events.value.count === previousEventsCount) {
            noMoreResults = true;
        }
    }
}

onMounted(async () => {
    await getEvents();
    document.getElementById('eventsGrid').addEventListener('scroll', async (event) => await detectedScroll(event))
})
onBeforeUnmount(() => {
    document.getElementById('eventsGrid').removeEventListener('scroll', async (event) => await detectedScroll(event))
})

</script>

<template>
    <div class="flex flex-row items-end h-[8rem] bg-slate-100 border-b-2 border-slate-200">
        <div class="userGrid items-end mb-2 px-5">
            <div><span class="font-semibold text-xs text-slate-400">Id</span></div>
            <div class="labelInputContainerAdmin">
                <input v-model="titleInput" id="title" type="text" placeholder="Title" @input="getEvents()"/>
                <span class="font-semibold text-xs text-slate-400">Title</span>
            </div>
            <div class="labelInputContainerAdmin">
                <input v-model="descriptionInput" id="description" type="text" placeholder="Description" @input="getEvents()"/>
                <span class="font-semibold text-xs text-slate-400">Description</span>
            </div>
            <div><span class="font-semibold text-xs text-slate-400">Address</span></div>
            <div><span class="font-semibold text-xs text-slate-400">Closed</span></div>
            <div><span class="font-semibold text-xs text-slate-400">Founder</span></div>
        </div>
    </div>
    <div id="eventsGrid" class="h-[calc(100vh-8rem-8rem)] overflow-y-scroll">
        <div v-for="event in events" >
            <EventGridLine :eventData="event"/>
        </div>
    </div>
</template>
