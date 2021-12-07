import React from 'react'
import { Button } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'

const TaskSimpleView = () => {
  return (
    //  text,flag, checkbox, createdAt, EditedAt, delete, dueDataTime
    <>
      <input type="checkbox" />
      <p>text</p>
      <Button size="small" color="dark" icon={<IoCloseOutline />}></Button>
    </>
  )
}

export default TaskSimpleView
