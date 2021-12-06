import React from 'react'
import { BsSearch } from 'react-icons/bs'
import styled from 'styled-components'

const SearchInput = () => {
  const Input = styled.input`
    background-color: rgb(75, 82, 92);
    opacity: 0.7;
    outline: none;
    border: 1px solid rgb(63, 63, 63);
    border-bottom: 2px solid rgb(63, 63, 63);
    color: white;
    border-radius: 5px;
    height: 20px;
  `

  return (
    // input, icon
    <>
      <BsSearch />
      <Input placeholder="Search"></Input>
    </>
  )
}

export default SearchInput
