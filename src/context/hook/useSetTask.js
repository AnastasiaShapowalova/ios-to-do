import { useState } from 'react'
import { firestoreService } from 'services'

const useSetTask = (addTask, createTask, selectedCategory) => {
  const [task, setTask] = useState('')
  const setNewTask = (e) => {
    setTask(e.target.value)
  }

  const AddTask = (event) => {
    const newTask = task.trim()
    if (event.key === 'Enter' && newTask.length >= 1) {
      addTask(newTask)
      createTask(newTask, firestoreService.getId('task'))
      setTask('')
    }
  }

  return { task, setTask, AddTask, setNewTask }
}

export default useSetTask
