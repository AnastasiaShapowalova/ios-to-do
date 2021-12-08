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
        fill="false"
        outline="false"
        placeholder="Search"
        size="medium"
        icon={<BsSearch />}
        button={
          <Button
            shape="rounded"
            size="small"
            color="light"
            focus="dark"
            icon={<MdCancel />}></Button>
        }></Input>
    </>
  )
}

export default SearchInput
