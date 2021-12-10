import { Input } from '../../../../components'
import { TaskSimpleFormWrapper } from './TaskSimpleForm.style'

const TaskSimpleForm = () => {
  return (
    // chekbox, dueDataTime, flag, input
    <TaskSimpleFormWrapper>
      {/* checkbox  */}
      <Input />
      <Input variant="input-isMuted" placeholder="Notes" />
    </TaskSimpleFormWrapper>
  )
}

export default TaskSimpleForm
