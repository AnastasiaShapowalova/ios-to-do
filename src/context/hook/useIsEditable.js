import { useState } from 'react'

const useIsEditable = () => {
  const [editable, isEditable] = useState(false)

  return { editable, isEditable }
}

export default useIsEditable
