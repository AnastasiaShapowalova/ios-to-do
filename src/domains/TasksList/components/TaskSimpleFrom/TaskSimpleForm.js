import { Input, Checkbox, Col, Row } from 'components'
import { TaskSimpleFormWrapper, InputWrapper } from './TaskSimpleForm.style'
import { useSetTask } from 'contexts/hooks'

const TaskSimpleForm = (props) => {
  const { add } = props
  const { AddTask, task, setNewTask } = useSetTask(add)

  return (
    <TaskSimpleFormWrapper onKeyPress={AddTask}>
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
