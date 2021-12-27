import { useState } from 'react'

const useSetEditTask = (todo, editTask) => {
  const [editedTask, setEditTask] = useState(todo)

  const setEditedTask = (e) => {
    setEditTask(e.target.value)
  }

  return { editedTask, setEditTask, setEditedTask }
}

export default useSetEditTask
