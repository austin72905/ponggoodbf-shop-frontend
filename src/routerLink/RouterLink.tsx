import React,{forwardRef} from 'react'
import { NavLink,NavLinkProps,LinkProps } from 'react-router-dom'



const RouterLink=forwardRef<any,any >((props,ref)=>
(
    <NavLink ref={ref} {...props} />
))

export default RouterLink;