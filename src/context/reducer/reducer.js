export const initialState = {
  taskCount: 1,
  tasks: [{ id: 0, task: 'Walk', categoryId: 0, createdAt: 0, editedAt: 0 }],
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
      const categoryId = state.tasks.findIndex((name) => name.id === action.id)
      const categories = Object.assign([], state.categories)
      categories.splice(categoryId, 1)

      return {
        id: categories.id,
        categories: categories,
        tasks: [...state?.tasks],
        taskCount: state.taskCount
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
    //     categories: categories,
    //     tasks: [...state?.tasks],
    //     taskCount: state.taskCount
    //   }
    // }

    default:
      return state
  }
}
