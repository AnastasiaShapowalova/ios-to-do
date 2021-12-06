import React from 'react'
import { SearchInput } from '../../..'
import { TaskList } from '../../../../domains'

const Content = () => {
  return (
    <>
      <input type="checkbox" />
      <TaskList />
      <input type="checkbox" />
      <input />
      <p>no remaindners</p>
      {/* text,flag, checkbox, createdAt, EditedAt, delete, dueDataTime  */}
      {/* Checkbox, Input, flag, dueDataTime */}
      {/* no remaindners  */}
    </>
  )
}

export default Content
