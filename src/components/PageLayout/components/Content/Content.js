import { TaskList, TaskSimpleForm } from '../../../../domains'
import { Row, Col } from '../../..'
import { useStore } from 'context/hook'

const Content = () => {
  const { dispatch, state } = useStore()

  return (
    <>
      <Row>
        <Col>
          <TaskList state={state} dispatch={dispatch} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskSimpleForm
            addTask={(task) => dispatch({ type: 'addTask', task: task })}
          />
        </Col>
      </Row>
    </>
  )
}

export default Content
