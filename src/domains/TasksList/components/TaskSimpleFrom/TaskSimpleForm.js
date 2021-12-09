import React from 'react'
import { Input } from '../../../../components'

const TaskSimpleForm = () => {
  return (
    // chekbox, dueDataTime, flag, input
    <>
      <Input
        note="note"
        placeholder="Notes"
        radio="radio"
        outline="false"
        size="lg"
      />
    </>
  )
}

export default TaskSimpleForm
