import { Button, Text, IconModule } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { CategorySimpleViewWrapper } from './CategorySimpleView.style'

const CategorySimpleView = () => {
  return (
    // icon, name, count
    <CategorySimpleViewWrapper>
      <IconModule icon={<AiOutlineUnorderedList />} />
      <Text size="md" color="gray-lighten">
        Categorie name
      </Text>
      <Text variant="h6" color="gray-darken">
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
