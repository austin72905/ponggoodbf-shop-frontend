import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { RouteInfomation } from '../../routes/routes'



export default function MainPage({ path, title }: RouteInfomation) {

  return (
    <div>{title}</div>
  )
}
