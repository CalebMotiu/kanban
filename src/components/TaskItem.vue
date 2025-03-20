<script setup>
defineProps({
    taskName: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div
        class="p-2 text-white bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        {{ taskName }}
    </div>
</template>