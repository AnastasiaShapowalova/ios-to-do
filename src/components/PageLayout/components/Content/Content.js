import { TaskList, TaskSimpleForm } from '../../../../domains'
import { Row, Col } from '../../..'

const Content = () => {
  return (
    <>
      <Row>
        <Col>
          <TaskList />
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskSimpleForm />
        </Col>
      </Row>
    </>
  )
}

export default Content
