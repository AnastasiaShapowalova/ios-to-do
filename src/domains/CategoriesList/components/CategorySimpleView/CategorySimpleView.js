import { Button, Text, IconModule } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { CategorySimpleViewWrapper } from './CategorySimpleView.style'

const CategorySimpleView = (props) => {
  const { children } = props

  return (
    // icon, name, count
    <CategorySimpleViewWrapper>
      <IconModule icon={<AiOutlineUnorderedList />} />
      <Text className="my-md overflow-ellipsis" size="md">
        {children}
      </Text>
      <Text className="ml-auto" variant="h6" color="gray">
        0
      </Text>
      <Button
        size="md"
        color="gray-darken"
        variant="button-isBlanck"
        icon={<IoCloseOutline />}></Button>
    </CategorySimpleViewWrapper>
  )
}

export default CategorySimpleView
