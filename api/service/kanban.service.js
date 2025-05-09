export const lists = []
import { List, Task } from "../db.js"

export const addNewList = columnName => {
  // lists.push({ name: columnName, tasks: [] })
  List.create({ name: columnName })
}

export const addNewTask = (listId, taskName) => {
  lists[listId].tasks.push({ name: taskName })
}

export const deleteList = id => {
  List.destroy({ where: { id: id } })
  // lists.splice(id, 1)
}
export const editList = (id, name) => {
  lists[id].name = name
}

export const getKanbanLists = () => {
  return lists
}
