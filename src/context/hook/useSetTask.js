import { useState } from 'react'

const useSetTask = (addTask) => {
  const [task, setTask] = useState('')
  const setNewTask = (e) => {
    setTask(e.target.value)
    console.log(e.target.value)
  }

  const AddTask = (event) => {
    const newTask = task.trim()
    if (event.key === 'Enter' && newTask.length >= 1) {
      addTask(newTask)
      console.log(`task: ${newTask}`)
      setTask('')
    }
  }

  return { task, setTask, AddTask, setNewTask }
}

export default useSetTask
