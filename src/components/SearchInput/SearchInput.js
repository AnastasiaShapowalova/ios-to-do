import { Input } from '..'
import { BsSearch } from 'react-icons/bs'
import { MdCancel } from 'react-icons/md'
import { Button } from '../'
import { SearchInputWrapper } from './SearchInput.style'

const SearchInput = () => {
  return (
    <SearchInputWrapper size="md" fill="false" outline="false">
      <BsSearch />
      <Input placeholder="Search"></Input>
      <Button
        shape="rounded"
        size="lg"
        color="gray-lighten"
        variant="button-isBlanck"
        icon={<MdCancel />}></Button>
    </SearchInputWrapper>
  )
}

export default SearchInput
