import { Button, Text, IconModule } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'
import { AiOutlineUnorderedList } from 'react-icons/ai'

const CategorySimpleView = () => {
  return (
    // icon, name, count
    <>
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
    </>
  )
}

export default CategorySimpleView
