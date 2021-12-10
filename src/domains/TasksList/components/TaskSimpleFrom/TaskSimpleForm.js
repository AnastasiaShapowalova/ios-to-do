import { Input, Checkbox } from '../../../../components'
import { TaskSimpleFormWrapper, InputWrapper } from './TaskSimpleForm.style'

const TaskSimpleForm = () => {
  return (
    // chekbox, dueDataTime, flag, input
    <TaskSimpleFormWrapper>
      <Checkbox isChecked="isChecked" color="green" />
      <InputWrapper>
        <Input />
        <Input variant="input-isMuted" placeholder="Notes" />
      </InputWrapper>
    </TaskSimpleFormWrapper>
  )
}

export default TaskSimpleForm
