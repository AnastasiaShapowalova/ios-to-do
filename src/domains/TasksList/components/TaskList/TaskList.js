import { Col, Row } from 'components'
import { TaskSimpleView } from '../'
import { firestoreService } from 'services'
import { useStore } from 'context'

const TaskList = (props) => {
  const { tasks, dispatch } = props

  return (
    <>
      {tasks?.map((el, index) => (
        <Row key={index}>
          <Col>
            <TaskSimpleView
              todo={el}
              removeTask={(task) => {
                dispatch({ type: 'removeTask', id: el.id, task: task })
                firestoreService.deleteDocument('task', el.id)
              }}
              editTask={(task) => {
                dispatch({ type: 'editTask', id: el.id, task: task })
              }}></TaskSimpleView>
          </Col>
        </Row>
      ))}
    </>
  )
}

export default TaskList
