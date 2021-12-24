import { useState } from 'react'

const useSetTask = (add) => {
  const [task, setTask] = useState('')
  const setNewTask = (e) => {
    setTask(e.target.value)
    console.log(e.target.value)
  }

  const AddTask = (event) => {
    const newTask = task.trim()
    if (event.key === 'Enter' && newTask.length >= 1) {
      add(newTask)
      console.log(`task: ${newTask}`)
      setTask('')
    }
  }

  return { task, setTask, AddTask, setNewTask }
}

export default useSetTask
