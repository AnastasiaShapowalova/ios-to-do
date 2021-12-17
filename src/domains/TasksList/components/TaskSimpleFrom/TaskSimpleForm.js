import { Input, Checkbox, Col, Row } from '../../../../components'
import { TaskSimpleFormWrapper, InputWrapper } from './TaskSimpleForm.style'

const TaskSimpleForm = () => {
  return (
    // chekbox, dueDataTime, flag, input
    <TaskSimpleFormWrapper>
      <Row>
        <Col className="direction-row">
          <Checkbox color="green" />
          <InputWrapper className="pt-sm pb-md">
            <Input />
            <Input variant="input-isMuted" placeholder="Notes" />
          </InputWrapper>
        </Col>
      </Row>
    </TaskSimpleFormWrapper>
  )
}

export default TaskSimpleForm
