import { Switcher } from './'
import { Row, Col } from 'components'
import {
  BsFillCalendarDateFill,
  BsWalletFill,
  BsFillFlagFill
} from 'react-icons/bs'
import { AiOutlineSchedule } from 'react-icons/ai'
import { SwitcherListWrapper } from './Switcher.style'

const SWITCHER = [
  { name: 'Today', color: 'blue', icon: <BsFillCalendarDateFill /> },
  { name: 'Scheduled', color: 'red', icon: <AiOutlineSchedule /> },
  { name: 'All', color: 'gray', icon: <BsWalletFill /> },
  { name: 'Flagged', color: 'orange', icon: <BsFillFlagFill /> }
]

const SwitcherList = () => {
  return (
    <SwitcherListWrapper data-textId="SwitcherList">
      {SWITCHER.map(({ name, color, icon }) => (
        <Switcher color={color} icon={icon}>
          {name}
        </Switcher>
      ))}
    </SwitcherListWrapper>
  )
}

export default SwitcherList
