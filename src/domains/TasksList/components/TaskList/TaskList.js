import { Col, Row } from 'components'
import { TaskSimpleView } from '../'
import { useStore } from 'context/hook'

const TaskList = () => {
  const { state } = useStore()

  return (
    <>
      {state.map((el) => (
        <Row key={el.id}>
          <Col>
            <TaskSimpleView text={el.task}></TaskSimpleView>
          </Col>
        </Row>
      ))}
    </>
  )
}

export default TaskList
