import { Button, Col, Row, Text, Checkbox } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'

const TaskSimpleView = () => {
  return (
    //  Title,flag, checkbox, createdAt, EditedAt, delete, dueDataTime
    <>
      {/* checkbox  */}
      <Row>
        <Col>
          <Checkbox isChecked="isChecked" color="green" />
          <Text variant="h4">Task Title</Text>
        </Col>
        <Col col="1">
          <Button
            variant="button-isBlanck"
            size="md"
            color="gray-darken"
            icon={<IoCloseOutline />}></Button>
        </Col>
      </Row>
    </>
  )
}

export default TaskSimpleView
