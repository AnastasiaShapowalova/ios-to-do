import { ColWrapper } from './Col.style'

const Col = (props) => {
  const { children } = props
  return <ColWrapper>{children}</ColWrapper>
}

export default Col
