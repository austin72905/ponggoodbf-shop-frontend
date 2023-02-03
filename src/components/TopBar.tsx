import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import LogoImage from '../assets/朋朋大頭貼.jpg'


import RouterLink from '../routerLink/RouterLink'

import React, { useState } from 'react';

export default function TopBar() {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/new-arrival")
  }

  const toCart = () => {
    navigate("/cart")
  }

  //anchor 錨 不使用這個方式，整個nav 會跑掉
  //這邊不給型別 e.currentTarget 會抱錯
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorElement)

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  const redirectToInstgram = () => {
    window.open("https://www.instagram.com/ponggoodbf/", "_blank")
  }

  const toLogin=()=>{
    navigate("/login")
  }

  const toSignUp=()=>{
    navigate("/signup")
  }

  return (
    <Box>
      <AppBar position="fixed">
        <Container>
          <Toolbar sx={{ display: "flow", justifyContent: "space-between" }}>
            <Box>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <AvatarButton sx={{ width: 56, height: 56 }} alt='LOGO' src={LogoImage} onClick={toHome} />
                <Box>
                  <Typography variant='body2' sx={{ color:"black",fontWeight: "bold" }}>IG:</Typography>
                  <Link href='#'  rel='noopener noreferrer' variant='body2' sx={{ fontWeight: "bold", color: "black" }}>ponggoodbf</Link>
                </Box>

              </Stack>
            </Box>



            <Box sx={{ display: "flex", alignItems: "end", cursor: "pointer" }} onClick={toHome}>
              <Typography variant="h5" sx={{ letterSpacing: 10, fontWeight: 900, color: "#755F4B" }}>好男友</Typography>
              <Typography sx={{ letterSpacing: 10, fontWeight: 900, color: "#355C5A" }}>線上商店</Typography>
            </Box>
            <Box sx={{ display: "flex",flexDirection:"row",alignItems:"center" }}>
              <TopNavButton onClick={handleClick}>
                <AccountCircleOutlinedIcon />
              </TopNavButton>
              <TopNavButton onClick={toCart}>
                <ShoppingCartOutlinedIcon />
              </TopNavButton>
              <TopNavButton >
                <NotificationsActiveOutlinedIcon />
              </TopNavButton>
              <Stack sx={{ml:"10px"}} spacing={"10px"}  direction={"row"} divider={<Divider orientation="vertical" flexItem />}>
                  <Typography variant='subtitle2' sx={{color:"black",cursor: "pointer"}} onClick={toLogin}>登入</Typography>
                  <Typography variant='subtitle2' sx={{color:"black",cursor: "pointer"}} onClick={toSignUp} >註冊</Typography>
              </Stack>
            </Box>
          </Toolbar>
        </Container>

      </AppBar>

      {/*他是黏著 帳戶icon 鈕的 */}
      <Menu anchorEl={anchorElement} open={open} onClick={handleClose} onClose={handleClose}>
        <MenuItem component={RouterLink} to="/user/account">
          <PersonOutlineIcon />
          <Typography sx={{ marginLeft: 1 }} variant='body2'>我的帳戶</Typography>
        </MenuItem>
        <MenuItem component={RouterLink} to="/user/purchase">
          <ReceiptLongIcon />
          <Typography sx={{ marginLeft: 1 }} variant='body2'>訂單查詢</Typography>
        </MenuItem>
        <MenuItem component={RouterLink} to="/user/collection-list">
          <FavoriteIcon />
          <Typography sx={{ marginLeft: 1 }} variant='body2'>願望清單</Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}


const TopBarWrapper = styled(AppBar)({
  backgroundColor: "#61D1BD"
})

const SearchInputWrapper = styled(TextField)(
  {
    '& fieldset': { borderTopRightRadius: "40px", borderBottomRightRadius: "40px" },

  })

const SearchButton = styled(Button)(
  {
    borderTopLeftRadius: "40px",
    borderBottomLeftRadius: "40px",
    backgroundColor: "#B4B1AA",
    "&:hover": { backgroundColor: "#d9d9d9" }
  })

const TopNavButton = styled(IconButton)(
  {

  })


const AvatarButton = styled(Avatar)({
  cursor: "pointer"
}

)