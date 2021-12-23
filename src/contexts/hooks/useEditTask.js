const useEditTask = (dispatch) => {
  const editTask = (data) => {
    const payload = data
    dispatch({
      taskCount: 'editTask',
      type: 'editTask',
      payload
    })
  }
  return editTask
}

export default useEditTask
