import { useReducer, useEffect } from 'react'
import { StoreContext } from '.'
import { initialState, reducer } from 'context/reducer/reducer'
import {
  useIsEditable,
  useSetCategory,
  useSetEditTask,
  useSetTask,
  useShowForm,
  useSelectedCategory
} from './hook'
import firestoreService from 'services/firestoreService'

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { editable, isEditable } = useIsEditable()
  const { editTask, setEditTask, setEditedTask } = useSetEditTask()
  const { task, setTask, AddTask, setNewTask } = useSetTask()
  const { AddCategory, isSetCategory } = useSetCategory()
  const { showForm, setShowForm } = useShowForm()
  const { selectedCategory, setSelectedCategory } = useSelectedCategory()

  useEffect(() => {
    const getData = async () => {
      const dataTask = await firestoreService.queryDocuments('task')
      const dataCategory = await firestoreService.queryDocuments('category')

      dispatch({ type: 'updateData', payload: { dataTask, dataCategory } })
      console.log(dataTask)
    }

    getData()
  }, [])

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
        AddCategory,
        isSetCategory,
        showForm,
        setShowForm,
        selectedCategory,
        setSelectedCategory
      }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
