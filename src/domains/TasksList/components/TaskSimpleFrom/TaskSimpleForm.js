import { Input } from '../../../../components'
import { TaskSimpleFormWrapper } from './TaskSimpleForm.style'

const TaskSimpleForm = () => {
  return (
    // chekbox, dueDataTime, flag, input
    <TaskSimpleFormWrapper>
      {/* checkbox  */}
      <Input variant="taskInput" />
      <Input variant="taskInput" placeholder="Notes" />
    </TaskSimpleFormWrapper>
  )
}

export default TaskSimpleForm
