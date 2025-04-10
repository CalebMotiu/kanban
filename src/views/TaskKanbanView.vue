<script setup>
import AddColumn from '../components/AddColumn.vue';
import TaskLists from '../components/TaskLists.vue';

import { useKanban } from "../stores/kanban"
const kanbanStore = useKanban()

import { onMounted } from 'vue';
onMounted(() => {
    kanbanStore.fetchKanbanlists()
})
</script>
<template>
    <h1 class="p-3">Kanban</h1>
    <div class="flex">
        <TaskLists v-for="(list, index) in kanbanStore.lists" :key="index" :columnName="list.name" :columnId="index" />
    </div>
    <AddColumn class="justify-self-center m-3" />

</template>
