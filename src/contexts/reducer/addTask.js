const addTask = (state, payload) => {
  const stateCopy = state
  stateCopy.tasks.push(payload)
  const newCount = state.taskCount++

  return { ...stateCopy, newCount }
}

export default addTask
