import { Button, Text, IconModule } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { CategorySimpleViewWrapper } from './CategorySimpleView.style'

const CategorySimpleView = (props) => {
  const { category } = props

  return (
    // icon, name, count
    <CategorySimpleViewWrapper>
      <IconModule icon={<AiOutlineUnorderedList />} />
      <Text className="my-md overflow-ellipsis" size="md">
        {category.name}
      </Text>
      <Text className="ml-auto" variant="h6" color="gray">
        {category.count}
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
