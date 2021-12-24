const useRemoveTask = (dispatch) => {
  const removeTask = (data) => {
    const payload = data

    dispatch({
      taskCount: 'removeTask',
      type: 'removeTask',
      payload
    })

    return removeTask
  }
  return removeTask
}

export default useRemoveTask
