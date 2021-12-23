import { RowWrapper } from './Row.style'

const Row = (props) => {
  const { children, className } = props

  return (
    <RowWrapper className={className} data-textid="row">
      {children}
    </RowWrapper>
  )
}

export default Row
