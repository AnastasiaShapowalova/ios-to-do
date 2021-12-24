import { Input, Checkbox, Col, Row } from 'components'
import { TaskSimpleFormWrapper, InputWrapper } from './TaskSimpleForm.style'
import { useSetTask } from 'context/hook'

const TaskSimpleForm = (props) => {
  const { addTask } = props
  const { AddTask, task, setNewTask } = useSetTask(addTask)

  return (
    <TaskSimpleFormWrapper onKeyPress={AddTask} className="direction-column">
      <Row>
        <Col className="direction-row">
          <Checkbox color="green" />
          <InputWrapper className="pt-sm pb-md">
            <Input value={task} onChange={(e) => setNewTask(e)} autoFocus />
            <Input variant="input-isMuted" placeholder="Notes" />
          </InputWrapper>
        </Col>
      </Row>
    </TaskSimpleFormWrapper>
  )
}

export default TaskSimpleForm
