import { TaskList, TaskSimpleForm } from '../../../../domains'
import { Row, Col } from '../../..'
import { useStore } from 'context/hook'

const Content = () => {
  const { dispatch, state, showForm } = useStore()
  const addTask = (task) => dispatch({ type: 'addTask', task: task })

  console.log('state in content ---->', state)

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
