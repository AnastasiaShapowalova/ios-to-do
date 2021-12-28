import { Switcher } from './'
import {
  BsFillCalendarDateFill,
  BsWalletFill,
  BsFillFlagFill
} from 'react-icons/bs'
import { AiOutlineSchedule } from 'react-icons/ai'
import { SwitcherListWrapper } from './Switcher.style'
import { useStore } from 'context/hook'

const SWITCHER = [
  { name: 'Today', color: 'blue', icon: <BsFillCalendarDateFill /> },
  { name: 'Scheduled', color: 'red', icon: <AiOutlineSchedule /> },
  { name: 'All', color: 'gray', icon: <BsWalletFill /> },
  { name: 'Flagged', color: 'orange', icon: <BsFillFlagFill /> }
]

const SwitcherList = () => {
  const { setSelectedCategory } = useStore()
  return (
    <SwitcherListWrapper data-textId="SwitcherList">
      {SWITCHER.map(({ name, color, icon }, index) => (
        <Switcher
          onClick={() => {
            setSelectedCategory(name)
          }}
          color={color}
          icon={icon}
          key={index}
          name={name}></Switcher>
      ))}
    </SwitcherListWrapper>
  )
}

export default SwitcherList
