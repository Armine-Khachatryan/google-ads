import React from 'react'
// Styles
import {Wrapper} from "./AccountLayout.styles"
import { Outlet } from 'react-router-dom'
const AccountLayout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  )
}

export default AccountLayout