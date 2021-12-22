import { Col, Row } from 'components'
import { TaskSimpleView } from '../'
import { useStore } from 'contexts/hooks'

const TaskList = () => {
  const { state, dispatch } = useStore()

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
