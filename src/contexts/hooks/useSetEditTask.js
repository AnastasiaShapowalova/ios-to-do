import { useState } from 'react'

const useSetEditTask = (todo) => {
  const [editTask, setEditTask] = useState(todo.task)

  const setNewTask = (e) => {
    setEditTask(e.target.value)
    console.log(e.target.value)
  }

  return { editTask, setEditTask, setNewTask }
}

export default useSetEditTask
