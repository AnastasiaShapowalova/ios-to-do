import { useState } from 'react'
import { Input, Checkbox, Col, Row } from '../../../../components'
import { TaskSimpleFormWrapper, InputWrapper } from './TaskSimpleForm.style'

const TaskSimpleForm = (props) => {
  const { add } = props
  const [task, setTask] = useState('')
  const setNewTask = (e) => {
    setTask(e.target.value)
    console.log(e.target.value)
  }
  const AddTask = () => {
    add(task)
    console.log(`task: ${task}`)
    setTask('')
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(`onSubmit: ${e.currentTarget.value}`)
  }

  return (
    // chekbox, dueDataTime, flag, input
    <TaskSimpleFormWrapper
      id="taskSimpleForm"
      onBlur={AddTask}
      onSubmit={onSubmit}>
      <Row>
        <Col className="direction-row">
          <Checkbox color="green" />
          <InputWrapper className="pt-sm pb-md">
            <Input value={task} onChange={(e) => setNewTask(e)} autoFocus />
            <Input variant="input-isMuted" placeholder="Notes" />
          </InputWrapper>
        </Col>
      </Row>
    </TaskSimpleFormWrapper>
  )
}

export default TaskSimpleForm
