import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AppLayout = ({ left, right }) => {
  return (
    <BrowserRouter>
      {left}
      <Routes>
        <Route path="/" element={right} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppLayout

{
  /* <sidebar></sidebar> //left
	<routes> //right
		<route path='' element ={	<pageall />}>
	</routes> */
}
