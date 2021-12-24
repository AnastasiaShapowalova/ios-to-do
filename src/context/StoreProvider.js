import { useReducer } from 'react'
import { StoreContext } from '.'
import { initialState, reducer } from 'context/reducer/reducer'
import {
  useIsEditable,
  useSetCategory,
  useSetEditTask,
  useSetTask
} from './hook'

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { editable, isEditable } = useIsEditable()
  const { editTask, setEditTask, setEditedTask } = useSetEditTask()
  const { task, setTask, AddTask, setNewTask } = useSetTask()
  const { category, AddCategory, isSetCategory } = useSetCategory()
  console.log(initialState)
  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch,
        editTask,
        setEditTask,
        setEditedTask,
        editable,
        isEditable,
        task,
        setTask,
        AddTask,
        setNewTask,
        category,
        AddCategory,
        isSetCategory
      }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
