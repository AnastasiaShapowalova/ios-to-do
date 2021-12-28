import { firestoreService } from 'services'

export const initialState = {
  taskCount: 0,
  tasks: [],
  categories: []
}

export const reducer = (state, action) => {
  console.log(action)
  const { type, payload } = action
  switch (action.type) {
    case 'addTask': {
      const newId = Math.random()
      const newTask = {
        id: newId,
        task: action.task,
        categotyName: action.categotyName
      }

      return {
        tasks: [...state.tasks, newTask],
        categories: [...state?.categories],
        taskCount: newTask.length
      }
    }

    case 'removeTask': {
      const taskId = state.tasks.findIndex((task) => task.id === action.id)
      //copy all objects
      const tasks = Object.assign([], state.tasks)
      tasks.splice(taskId, 1)
      const newCount = state.taskCount - 1

      return {
        id: tasks.id,
        tasks: tasks,
        taskCount: newCount,
        categories: [...state?.categories]
      }
    }

    case 'editTask': {
      console.log('action ---->', action)
      const taskId = state.tasks.findIndex((task) => task.id === action.id)
      const newTask = Object.assign([], state.tasks[taskId])
      newTask.task = action.task
      const tasks = Object.assign([], state.tasks)
      tasks.splice(taskId, 1, newTask)

      return {
        id: tasks.id,
        tasks: tasks,
        categories: [...state?.categories],
        taskCount: state.taskCount
      }
    }

    // category
    case 'addCategory': {
      const categoryId = state.categories.id + 1
      const newCategory = {
        id: categoryId,
        name: action.category
      }

      return {
        categories: [...state?.categories, newCategory],
        tasks: [...state?.tasks],
        taskCount: state.taskCount
      }
    }

    case 'removeCategory': {
      const categoryId = state.categories.findIndex(
        (name) => name.id === action.id
      )
      const categories = Object.assign([], state.categories)
      categories.splice(categoryId, 1)

      return {
        id: categories.id,
        categories: categories,
        tasks: [...state?.tasks],
        taskCount: state.taskCount
      }
    }

    case 'editCategory': {
      const categoryId = state.categories.findIndex(
        (name) => name.id === action.id
      )
      const newCategory = Object.assign([], state.categories[categoryId])
      newCategory.name = action.name
      const categories = Object.assign([], state.categories)
      categories.splice(categoryId, 1, newCategory)

      return {
        id: categories.id,
        categories: categories,
        tasks: [...state.tasks],
        taskCount: state.taskCount
      }
    }

    case 'updateData': {
      let newState = { ...state }

      newState = {
        ...newState,
        tasks: payload.dataTask,
        categories: payload.dataCategory
      }
      console.log('newState ', newState)
      return { ...newState }
    }

    default:
      return state
  }
}
