import { Button, Col, Row, Text } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'

const TaskSimpleView = () => {
  return (
    //  Title,flag, checkbox, createdAt, EditedAt, delete, dueDataTime
    <>
      {/* checkbox  */}
      <Row>
        <Col>
          <Text variant="h4">Task Title</Text>
        </Col>
        <Col>
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
