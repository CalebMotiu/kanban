<script setup>
import TaskItem from './TaskItem.vue';
import AddNewTask from './AddNewTask.vue';
const props = defineProps({
    columnName: {
        type: String,
        default: ""
    },
    columnId: {
        type: Number,
        default: 0
    }
})

import { useKanban } from '../stores/kanban';
const kanbanStore = useKanban();



function deleteList() {
    kanbanStore.deleteList(props.columnId)
}
</script>

<template>
    <div
        class=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div class="flex ">
            <h5 class=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ columnName }}
            </h5>
            <button
                class="mx-2 text-white end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                @click.prevent="deleteList">

                <i class="bi bi-x-circle w-5"></i>
            </button>
        </div>
        <div v-for="(task, index) in kanbanStore.lists[columnId].tasks" :key="index">
            <TaskItem :taskName="task.name"></TaskItem>
        </div>
        <AddNewTask :columnId="columnId" class="mt-2" />
    </div>

</template>