import { Col, Row } from 'components'
import { TaskSimpleView } from '../'

const TaskList = (props) => {
  const { tasks, dispatch } = props
  console.log('state --->')

  return (
    <>
      {tasks?.map((el, index) => (
        <Row key={index}>
          <Col>
            <TaskSimpleView
              todo={el}
              removeTask={(task) =>
                dispatch({ type: 'removeTask', id: el.id, task: task })
              }
              editTask={(task) =>
                dispatch({ type: 'editTask', id: el.id, task: task })
              }></TaskSimpleView>
          </Col>
        </Row>
      ))}
    </>
  )
}

export default TaskList
