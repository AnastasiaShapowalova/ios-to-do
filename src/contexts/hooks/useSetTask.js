import { useState } from 'react'

const useSetTask = (add) => {
  const [task, setTask] = useState('')
  const setNewTask = (e) => {
    setTask(e.target.value)
    console.log(e.target.value)
  }
  const AddTask = () => {
    add(task)
    console.log(`task: ${task}`)
    setTask('')
  }
  return { task, setTask, AddTask, setNewTask }
}

export default useSetTask
