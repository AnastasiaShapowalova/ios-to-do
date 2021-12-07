import { Button } from '../../../../components'
import React from 'react'
import { TaskSimpleView } from '..'
import { BsFlag } from 'react-icons/bs'

const TaskList = () => {
  return (
    // checbox, text, flag, delete
    <>
      <TaskSimpleView />
      <Button
        icon={<BsFlag />}
        type="fill"
        size="small"
        color="light"
        warning
        shape
      />
    </>
  )
}

export default TaskList
