import { defineStore } from "pinia"

export const useKanban = defineStore("kanban", {
  state: () => {
    return {
      lists: []
    }
  },
  actions: {
    addNewColumn(coulmnName) {
      this.lists.push({ name: coulmnName, tasks: [] })
    },
    deleteList(id) {
      this.lists.splice(id, 1)
    },
    addNewTask(taskName, listId) {
      this.lists[listId].tasks.push({ name: taskName })
    }
  }
})
