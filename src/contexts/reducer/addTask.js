const addTask = (state, payload) => {
  const stateCopy = state
  stateCopy.tasks.push(payload)

  return { ...stateCopy }
}

export default addTask
