import { TaskList, TaskSimpleForm } from '../../../../domains'
import { Row, Col } from '../../..'
import { useStore } from 'context/hook'
import firestoreService from 'services/firestoreService'

const Content = ({ selectedCategory }) => {
  const { dispatch, state, showForm } = useStore()
  console.log(selectedCategory)
  const addTask = (task) =>
    dispatch({ type: 'addTask', task: task, categotyName: selectedCategory })

  console.log(state)

  let newTask = []

  let i = 0
  state.tasks.forEach(function (tasks) {
    if (tasks.categotyName === selectedCategory) {
      console.log(tasks.categotyName)
      newTask[i] = tasks
      i++
    }
  })
  console.log(newTask.length)

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
            <TaskSimpleForm addTask={addTask} />
          </Col>
        </Row>
      )}
    </>
  )
}

export default Content
