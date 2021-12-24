import { Col, Row } from 'components'
import { TaskSimpleView } from '../'

const TaskList = (props) => {
  const { state, dispatch } = props
  console.log(state.tasks)
  return (
    <>
      {state.tasks.map((el, index) => (
        <Row key={index}>
          <Col>
            <TaskSimpleView
              todo={el}
              remove={(task) =>
                dispatch({ type: 'remove', id: el.id, task: task })
              }
              edit={(task) =>
                dispatch({ type: 'edit', id: el.id, task: task })
              }></TaskSimpleView>
          </Col>
        </Row>
      ))}
    </>
  )
}

export default TaskList
