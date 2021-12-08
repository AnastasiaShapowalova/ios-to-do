import react from 'react-icons'
import { Txt } from './Text.style'

const Text = (props) => {
  const { children, color, fw, type } = props
  return (
    <Txt color={color} type={type} fw={fw}>
      {children}
    </Txt>
  )
}

export default Text
