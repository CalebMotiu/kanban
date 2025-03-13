import { defineStore } from "pinia"

export const useKanban = defineStore("kanban", {
  state: () => {
    return {
      list: []
    }
  },
  actions: {
    addNewColumn(coulmnName) {
      this.list.push({ name: coulmnName })
    }
  }
})
