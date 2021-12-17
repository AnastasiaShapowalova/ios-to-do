import { Button, Text, IconModule, Row, Col } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { CategorySimpleViewWrapper } from './CategorySimpleView.style'

const CategorySimpleView = () => {
  return (
    // icon, name, count
    <CategorySimpleViewWrapper>
      <IconModule icon={<AiOutlineUnorderedList />} />
      <Text className="m-md" size="md">
        Categorie name
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
