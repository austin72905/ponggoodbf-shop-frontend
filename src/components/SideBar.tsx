import React,{forwardRef} from 'react'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


import RouterLink from '../routerLink/RouterLink'

import { RouteInfomation } from '../routes/routes'
import { NavLink as NavLinkBase,LinkProps,NavLinkProps,useLocation } from 'react-router-dom'


interface RouteProps {
    routeList: RouteInfomation[];
    routeAccountList: RouteInfomation[];
}

interface SideNavbar{
    icon:React.ReactNode;
    text:string
}

const NavLink=forwardRef<any,any>((props,ref)=>
(
    <NavLinkBase
        ref={ref}
        {...props}
    />
))

const navbarList:SideNavbar[]=[
    {
        icon:<HomeOutlinedIcon />,
        text:"主頁"
    },
    {
        icon:<TouchAppOutlinedIcon />,
        text:"抽籤"
    },
    {
        icon:<RestaurantIcon />,
        text:"餐廳"
    },
    {
        icon:<ListAltIcon />,
        text:"口袋名單"
    },
    {
        icon:<GroupOutlinedIcon />,
        text:"好友"
    },
    {
        icon:<MilitaryTechOutlinedIcon />,
        text:"個人積分"
    },
    {
        icon:<MailOutlineIcon />,
        text:"訊息"
    },

]


export default function SideBar({ routeList,routeAccountList }: RouteProps) {

    const { pathname } = useLocation()

    if (pathname.includes("/user")){
        return (
            <List sx={{ width: "20%" }}>
                {
                    routeAccountList.map(route =>
                    (
                        <ListItem key={route.title} sx={{paddingTop:0,paddingBottom:1}}>
                            <ListItemButton 
                                component={RouterLink}
                                to={route.path}
    
                                >
    
                                <ListItemText primary={<Typography sx={{ letterSpacing: "5px",fontWeight:"bold",fontSize:"12px" }}>{route.title}</Typography>} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
               
            </List>
        )
    }


    return (
        <List sx={{ width: "20%" }}>
            {
                routeList.map(route =>
                (
                    <ListItem key={route.title} sx={{paddingTop:0,paddingBottom:1}}>
                        <ListItemButton 
                            component={RouterLink}
                            to={route.path}

                            >

                            <ListItemText primary={<Typography sx={{ letterSpacing: "5px",fontWeight:"bold",fontSize:"12px" }}>{route.title}</Typography>} />
                        </ListItemButton>
                    </ListItem>
                ))
            }
           
        </List>
    )
}

