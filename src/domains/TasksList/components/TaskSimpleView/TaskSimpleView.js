import { Button, Col, Row, Text, Checkbox } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'
import { TaskWrapper } from './TaskSimpleView.style'
import { BsFlagFill } from 'react-icons/bs'

const TaskSimpleView = (props) => {
  const { children } = props
  return (
    //  Title,flag, checkbox, createdAt, EditedAt, delete, dueDataTime
    <>
      <Row>
        <Col className="direction-row">
          <Checkbox isChecked="isChecked" color="green" />
          <TaskWrapper className="display-flex">
            <Text className="flex-basis" variant="h4">
              {children}
            </Text>
            <Button
              variant="button-isBlanck"
              size="md"
              color="gray-darken"
              icon={<IoCloseOutline />}></Button>
            <Button
              icon={<BsFlagFill />}
              size="md"
              color="orange"
              shape="rounded"
              variant="button-isFilled"
            />
          </TaskWrapper>
        </Col>
      </Row>
    </>
  )
}

export default TaskSimpleView
