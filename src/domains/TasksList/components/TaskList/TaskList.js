import { Col, Row } from '../../../../components'
import { TaskSimpleView } from '..'

const TaskList = () => {
  return (
    <>
      <Row>
        <Col>
          <TaskSimpleView>Walk with dog</TaskSimpleView>
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskSimpleView>Wash dishes</TaskSimpleView>
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskSimpleView>Play the guitar</TaskSimpleView>
        </Col>
      </Row>
    </>
  )
}

export default TaskList
