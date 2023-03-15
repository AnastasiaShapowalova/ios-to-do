import { Button, Checkbox, Col, Input, Row } from 'components'
import { InputWrapper, TaskSimpleFormWrapper } from './TaskSimpleForm.style'
import { useSetTask, useStore } from 'context/hook'

import { BsFlagFill } from 'react-icons/bs'
import { useState } from 'react'

const TaskSimpleForm = (props) => {
  const { addTask, createTask } = props
  const { selectedCategory } = useStore()

  const { AddTask, task, setNewTask } = useSetTask(
    addTask,
    createTask,
    selectedCategory
  )

  const [text, setText] = useState('')

  return (
    <TaskSimpleFormWrapper onKeyPress={AddTask} className="direction-column">
      <Row>
        <Col className="direction-row">
          <Checkbox color="green" />
          <InputWrapper className="pt-sm pb-md">
            <Input
              type="text"
              value={task}
              onChange={(e) => setNewTask(e)}
              autoFocus
            />
            <Input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              variant="input-isMuted"
              placeholder="Notes"
            />
            {/* <Input type="date" /> */}
            <Button
              icon={<BsFlagFill />}
              size="md"
              color="orange"
              shape="rounded"
              variant="button-isFilled"
            />
          </InputWrapper>
        </Col>
      </Row>
    </TaskSimpleFormWrapper>
  )
}

export default TaskSimpleForm
