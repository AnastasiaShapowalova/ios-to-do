export const initialState = {
  taskCount: 0,
  tasks: [],
  categories: []
}

export const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'addTask': {
      const newCount = state.taskCount + 1
      const newId = Math.random()
      const newTask = {
        id: newId,
        task: action.task
      }

      return {
        tasks: [...state.tasks, newTask],
        categories: [...state?.categories],
        taskCount: newCount
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
      const taskId = state.tasks.findIndex((task) => task.id === action.id)
      const newTasks = Object.assign([], state.tasks)
      newTasks.task = action.task
      const tasks = Object.assign([], state.tasks)
      tasks.splice(taskId, 1, newTasks)

      return {
        id: tasks.id,
        tasks: tasks,
        categories: [...state?.categories]
      }
    }

    // category
    case 'addCategory': {
      const categoryId = Math.random()
      const newCategory = {
        id: categoryId,
        name: action.category
      }
      const newCount = state.taskCount
      return {
        categories: [...state?.categories, newCategory],
        tasks: [...state?.tasks],
        taskCount: newCount
      }
    }

    case 'removeCategory': {
      const categoryId = state.tasks.findIndex((name) => name.id === action.id)
      const categories = Object.assign([], state.categories)
      categories.splice(categoryId, 1)
      const newCount = state.taskCount

      return {
        id: categories.id,
        categories: categories,
        tasks: [...state?.tasks],
        taskCount: newCount
      }
    }

    // case 'editCategory': {
    //   const categoryId = state.tasks.findIndex((name) => name.id === action.id)
    //   const newCategories = Object.assign([], state.category)
    //   newCategories.name = action.name
    //   const categories = Object.assign([], state.category)
    //   categories.splice(categoryId, 1, newCategories)

    //   return {
    //     id: categories.id,
    //     name: categories
    //   }
    // }

    default:
      return state
  }
}
