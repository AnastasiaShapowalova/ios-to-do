import React from 'react'
import { SearchInput } from '../../..'
import { TaskList, TaskSimpleForm } from '../../../../domains'

const Content = () => {
  return (
    <>
      <TaskList />
      <TaskSimpleForm />
      <p>no remaindners</p>
      {/* text,flag, checkbox, createdAt, EditedAt, delete, dueDataTime  */}
      {/* Checkbox, Input, flag, dueDataTime */}
      {/* no remaindners  */}
    </>
  )
}

export default Content
