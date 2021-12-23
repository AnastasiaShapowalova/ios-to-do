import { useState } from 'react'

const useSetEditTask = (todo) => {
  const [editTask, setEditTask] = useState(todo.task)

  const setEditedTask = (e) => {
    setEditTask(e.target.value)
  }

  return { editTask, setEditTask, setEditedTask }
}

export default useSetEditTask
