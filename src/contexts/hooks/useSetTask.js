import { useState } from 'react'

const useSetTask = (add) => {
  const [task, setTask] = useState('')
  const setNewTask = (e) => {
    setTask(e.target.value)
  }
  const AddTask = (event) => {
    if (event.key === 'Enter') {
      add(task)
      setTask('')
    }
  }

  return { task, setTask, AddTask, setNewTask }
}

export default useSetTask
