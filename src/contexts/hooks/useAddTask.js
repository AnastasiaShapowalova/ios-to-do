const useAddTask = (dispatch) => {
  const addTask = (data) => {
    const payload = data
    dispatch({
      taskCount: 'addTask',
      type: 'addTask',
      payload
    })
  }
  return addTask
}

export default useAddTask
