import { addTask } from '.'

const reducer = (state, action) => {
  const { type, payload } = action

  const actionsMap = {
    addTask
  }
  return actionsMap[type](state, payload)
}

export default reducer

// switch (action.type) {
//   case 'add': {
//     const newCount = state.taskCount + 1
//     const newId = Math.random()
//     const newTask = {
//       id: newId,
//       task: action.task
//     }

//     return {
//       counter: newId,
//       tasks: [...state.tasks, newTask],
//       taskCount: newCount
//     }
//   }

//   case 'remove': {
//     const taskId = state.tasks.findIndex((task) => task.id === action.id)
//     //copy all objects
//     const tasks = Object.assign([], state.tasks)
//     tasks.splice(taskId, 1)
//     const newCount = state.taskCount - 1

//     return {
//       id: tasks.id,
//       tasks: tasks,
//       taskCount: newCount
//     }
//   }

//   case 'edit': {
//     const taskId = state.tasks.findIndex((task) => task.id === action.id)
//     const newTasks = Object.assign([], state.tasks)
//     newTasks.task = action.task
//     const tasks = Object.assign([], state.tasks)
//     tasks.splice(taskId, 1, newTasks)

//     return {
//       id: tasks.id,
//       tasks: tasks
//     }
//   }

//   default:
//     return state
// }
