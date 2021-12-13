import { Title } from '../../..'
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
      <Row>
        <Col>
          <Title variant="h3" color="gray-darken">
            No Remainders
          </Title>
        </Col>
      </Row>

      {/* Title,flag, checkbox, createdAt, EditedAt, delete, dueDataTime  */}
      {/* Checkbox, Input, flag, dueDataTime */}
      {/* no remaindners  */}
    </>
  )
}

export default Content
