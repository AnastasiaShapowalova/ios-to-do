import React from 'react'
import { Input } from '..'
import { BsSearch } from 'react-icons/bs'
import { Button } from '../'
import { MdCancel } from 'react-icons/md'

const SearchInput = () => {
  return (
    // input, icon
    <>
      <Input
        placeholder="Search"
        icon={<BsSearch />}
        button={
          <Button size="small" type="light" focus="dark" tag="button">
            <MdCancel />
          </Button>
        }></Input>
    </>
  )
}

export default SearchInput
