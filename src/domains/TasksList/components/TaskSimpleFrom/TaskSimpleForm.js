import { useState } from 'react'
import { Input, Checkbox, Col, Row } from 'components'
import { TaskSimpleFormWrapper, InputWrapper } from './TaskSimpleForm.style'
import { useStore } from 'context/hook/'

const TaskSimpleForm = () => {
  const { addTask } = useStore()
  const [task, setTask] = useState('')
  const myFunction = (e) => {
    const newTask = task.trim()
    if (e.key === 'Enter' && newTask.length >= 1) {
      addTask({ id: Math.random(), task: newTask })
      setTask('')
    }
  }

  return (
    <TaskSimpleFormWrapper onKeyPress={myFunction} className="direction-column">
      <Row>
        <Col className="direction-row">
          <Checkbox color="green" />
          <InputWrapper className="pt-sm pb-md">
            <Input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              autoFocus
            />
            <Input variant="input-isMuted" placeholder="Notes" />
          </InputWrapper>
        </Col>
      </Row>
    </TaskSimpleFormWrapper>
  )
}

export default TaskSimpleForm
