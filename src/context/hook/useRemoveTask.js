const useRemoveTask = (state, dispatch) => {
  const removeTask = (data) => {
    const payload = data

    const taskId = state.tasks.findIndex((task) => task.id === dispatch.id)
    const tasks = Object.assign([], state.tasks)
    tasks.splice(taskId, 1)
    const newCount = state.taskCount - 1

    // const taskListIndex = store.indexOf(data)
    // // const taskIndex = data.tasks[collection].indexOf(task)
    // const storeCopy = [...store]
    // storeCopy.splice(taskListIndex, 1)

    dispatch({
      taskCount: newCount,
      type: 'removeTask',
      payload: tasks
    })

    return removeTask
  }
  return removeTask
}

export default useRemoveTask
