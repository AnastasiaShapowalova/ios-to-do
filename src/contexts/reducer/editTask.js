const editTask = (state, payload) => {
  const stateCopy = state
  stateCopy.tasks.split(payload)
  const newCount = state.taskCount--

  return { ...stateCopy, newCount }
}

export default editTask
