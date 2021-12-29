import { TaskList, TaskSimpleForm } from '../../../../domains'
import { Row, Col } from '../../..'
import { useStore } from 'context/hook'
import firestoreService from 'services/firestoreService'

const Content = ({ selectedCategory }) => {
  const { dispatch, showForm, newTask } = useStore()

  console.log(selectedCategory)
  const addTask = (task) =>
    dispatch({ type: 'addTask', task: task, categotyName: selectedCategory })

  const createTask = (task, taskId, categotyName) => {
    firestoreService.createDocument('task', taskId, {
      id: taskId,
      task: task,
      categotyName: categotyName
    })
  }
  return (
    <>
      <Row>
        <Col>
          <TaskList tasks={newTask} dispatch={dispatch} />
        </Col>
      </Row>
      {showForm && (
        <Row>
          <Col>
            <TaskSimpleForm addTask={addTask} createTask={createTask} />
          </Col>
        </Row>
      )}
    </>
  )
}

export default Content
