import React from 'react'
import { SearchInput, Text } from '../../..'
import { TaskList, TaskSimpleForm } from '../../../../domains'

const Content = () => {
  return (
    <>
      <TaskList />
      <TaskSimpleForm />
      <Text type="h2" color="darken">
        No Remainders
      </Text>
      {/* text,flag, checkbox, createdAt, EditedAt, delete, dueDataTime  */}
      {/* Checkbox, Input, flag, dueDataTime */}
      {/* no remaindners  */}
    </>
  )
}

export default Content
