import { ColWrapper } from './Col.style'

const Col = (props) => {
  const { children, col, className } = props
  return (
    <ColWrapper col={col} className={className} data-textid="col">
      {children}
    </ColWrapper>
  )
}

export default Col
