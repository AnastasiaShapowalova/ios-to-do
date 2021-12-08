import React from 'react'
import { Button, Text } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'

const TaskSimpleView = () => {
  return (
    //  text,flag, checkbox, createdAt, EditedAt, delete, dueDataTime
    <>
      <input type="checkbox" />
      <Text type="h4" fw="normal" color="lighten">
        Task text
      </Text>
      <Button size="small" color="dark" icon={<IoCloseOutline />}></Button>
    </>
  )
}

export default TaskSimpleView
