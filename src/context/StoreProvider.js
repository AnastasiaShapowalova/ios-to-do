import { useReducer } from 'react'
import StoreContext from './StoreContext'
import { reducer } from './reducer'
import { useAddTask } from './hook'
import { useRemoveTask } from './hook'

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [])

  const addTask = useAddTask(dispatch)
  const removeTask = useRemoveTask(dispatch)

  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch,
        addTask,
        removeTask
      }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
