import { Button, Col, Row } from '../../../../components'
import { TaskSimpleView } from '..'
import { BsFlagFill } from 'react-icons/bs'

const TaskList = () => {
  return (
    // checbox, Title, flag, delete
    <>
      <Row>
        <Col>
          <TaskSimpleView />
        </Col>
        <Col>
          <Button
            icon={<BsFlagFill />}
            size="md"
            color="orange"
            shape="rounded"
            variant="button-isFilled"
          />
        </Col>
      </Row>
    </>
  )
}

export default TaskList
