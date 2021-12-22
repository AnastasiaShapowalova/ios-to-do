import { useReducer } from 'react'
import { StoreContext } from '.'
import { reducer } from '../reducer/'
import { useAddTask } from '../hooks'

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    taskCount: 2,
    tasks: [
      {
        id: 1,
        task: 'task 1'
      },
      {
        id: 2,
        task: 'task 2'
      }
    ]
  })
  // const { AddTask } = useSetTask(dispatch)
  const addTask = useAddTask(dispatch)

  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch,
        addTask
      }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
