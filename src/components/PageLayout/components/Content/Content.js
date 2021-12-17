import { TaskList, TaskSimpleForm } from '../../../../domains'
import { Row, Col } from '../../..'

const Content = () => {
  return (
    <div>
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

      {/* Title,flag, checkbox, createdAt, EditedAt, delete, dueDataTime  */}
      {/* Checkbox, Input, flag, dueDataTime */}
      {/* no remaindners  */}
    </div>
  )
}

export default Content
