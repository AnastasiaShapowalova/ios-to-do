import addTask from './addTask'
import removeTask from './removeTask'

const reducer = (state, action) => {
  const { type, payload } = action

  const actionsMap = {
    addTask,
    removeTask
  }

  return actionsMap[type](state, payload)
}

export default reducer
