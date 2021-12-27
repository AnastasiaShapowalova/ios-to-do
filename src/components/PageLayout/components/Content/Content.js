import { TaskList, TaskSimpleForm } from '../../../../domains'
import { Row, Col } from '../../..'
import { useStore } from 'context/hook'

const Content = ({ showForm, addTask }) => {
  const { dispatch, state } = useStore()

  return (
    <>
      <Row>
        <Col>
          <TaskList state={state} dispatch={dispatch} />
        </Col>
      </Row>
      {showForm && (
        <Row>
          <Col>
            <TaskSimpleForm addTask={addTask} />
          </Col>
        </Row>
      )}
    </>
  )
}

export default Content
