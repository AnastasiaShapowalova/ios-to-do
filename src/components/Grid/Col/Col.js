import { ColWrapper } from './Col.style'

const Col = (props) => {
  const { children, col } = props
  return <ColWrapper col={col}>{children}</ColWrapper>
}

export default Col
