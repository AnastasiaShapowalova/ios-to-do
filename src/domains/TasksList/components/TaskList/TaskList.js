import { Col, Row } from '../../../../components'
import { TaskSimpleView } from '..'

const TaskList = (props) => {
  const { state, dispatch } = props

  return (
    <>
      {state.tasks.map((el) => (
        <Row key={el.id}>
          <Col>
            <TaskSimpleView
              todo={el}
              remove={() => dispatch({ type: 'remove', id: el.id })}
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
