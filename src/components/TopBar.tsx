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
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import LogoImage from '../assets/朋朋大頭貼.jpg'


import RouterLink from '../routerLink/RouterLink'

import React, { useState,useContext } from 'react';

import {CartContext} from '../contextStore/context'

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

  const {cartContent} =useContext(CartContext)


  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  const handleSearchBarFocus: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    //console.log(e.currentTarget.offsetHeight)
    setSearchInputFocus(true)

  }

  const handleSearchBarFocusOut: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    //console.log(e.currentTarget.offsetHeight)
    setSearchInputFocus(false)

  }

  const [searchInputFocus, setSearchInputFocus] = useState(false)

  const [searchContent, setSearchContent] = useState<string>("")

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(e.target.value)
    setSearchContent(e.target.value)
  }

  const redirectToInstgram = () => {
    window.open("https://www.instagram.com/ponggoodbf/", "_blank")
  }

  const toLogin = () => {
    navigate("/login")
  }

  const toSignUp = () => {
    navigate("/signup")
  }

  const [searchBarOpen, setSearchBarOpen] = useState(false);

  const handlesearchBar = () => {
    setSearchBarOpen(s => !s)
  }

  const [fakeIsLogin, setFakeIsLogin] = useState(false);

  const handleIsLogin = () => {
    setFakeIsLogin(s => !s)
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
                  <Typography variant='body2' sx={{ color: "black", fontWeight: "bold" }}>IG:</Typography>
                  <Link href='#' rel='noopener noreferrer' variant='body2' sx={{ fontWeight: "bold", color: "black" }}>ponggoodbf</Link>
                </Box>

              </Stack>
            </Box>


            <Stack direction={"row"}>
              <Box sx={{ display: "flex", alignItems: "end", cursor: "pointer" }} onClick={toHome}>
                <Typography variant="h5" sx={{ letterSpacing: 10, fontWeight: 900, color: "#755F4B" }}>好男友</Typography>
                <Typography sx={{ letterSpacing: 10, fontWeight: 900, color: "#355C5A" }}>線上商店</Typography>

              </Box>



            </Stack>

            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              {searchBarOpen ? (
                <Stack>
                  <Stack direction={"row"} sx={{ justifyContent: "end" }}>
                    <Paper sx={{ border: "1px solid #d9d9d9", boxShadow: "none", display: 'flex', alignItems: 'center', width: 300, height: 35 }}>
                      <IconButton onClick={handlesearchBar} type="button" sx={{ p: '10px', width: 35, height: 35, borderRadius: "0px", '&:hover': { background: "white" } }} aria-label="search">
                        <SearchIcon />
                      </IconButton>
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="搜尋商品"
                        inputProps={{ 'aria-label': '搜尋商品', maxLength: 10 }}
                        value={searchContent}
                        onFocus={handleSearchBarFocus}
                        onBlur={handleSearchBarFocusOut}
                        onChange={handleInput}
                      />


                    </Paper>

                  </Stack>

                  {/*搜尋欄 */}
                  <Paper sx={{ position: "absolute", top: "51px", width: 301, display: searchInputFocus &&searchContent!="" ? "block" : "none" }}>
                    <List sx={{py:0.5}}>
                      {
                        searchRecordList.map((result, index) => {


                          if (result.includes(searchContent) && searchContent != "") {
                            return (
                              <ListItem disablePadding key={index}>

                                <ListItemButton sx={{ border: "0px solid", px: 1, py: 0.5 }} onMouseDown={() => { setSearchContent(result)}}>

                                  <SearchIcon sx={{ color: "#a9a9a9" }} />

                                  <ListItemText primary={result} sx={{ ml: 1.5, border: "0px solid" }} />
                                </ListItemButton>
                              </ListItem>
                            )
                          }

                          return null


                        })
                      }

                      
                      <ListItem disablePadding>

                        <ListItemButton sx={{ border: "0px solid", px: 1, py: 0.5 }} onMouseDown={() => { setSearchContent(searchContent) }}>

                          <SearchIcon sx={{ color: "#a9a9a9" }} />

                          <ListItemText primary={searchContent} sx={{ ml: 1.5, border: "0px solid" }} />
                        </ListItemButton>
                      </ListItem>
                        


                    </List>
                  </Paper>

                </Stack>
              )
                :
                <IconButton onClick={handlesearchBar}>
                  <SearchIcon />
                </IconButton>
              }
              {
                fakeIsLogin
                  ?
                  <TopNavButton onClick={handleClick}>
                    <AccountCircleOutlinedIcon />
                  </TopNavButton>

                  :
                  null
              }

              <TopNavButton onClick={toCart}>
                <Badge badgeContent={cartContent.length} max={99} color='error' >
                  <ShoppingCartOutlinedIcon />
                </Badge>
                
              </TopNavButton>
              <TopNavButton onClick={handleIsLogin} >
                <NotificationsActiveOutlinedIcon />
              </TopNavButton>
              {fakeIsLogin ?
                (null)
                :
                <Stack sx={{ ml: "10px" }} spacing={"10px"} direction={"row"} divider={<Divider orientation="vertical" flexItem />}>
                  <Typography variant='subtitle2' sx={{ color: "black", cursor: "pointer" }} onClick={toLogin}>登入</Typography>
                  <Typography variant='subtitle2' sx={{ color: "black", cursor: "pointer" }} onClick={toSignUp} >註冊</Typography>
                </Stack>
              }

            </Box>
          </Toolbar>
        </Container>


      </AppBar>

      {/*他是黏著 帳戶icon 鈕的 */}

      <Menu disableScrollLock sx={{ border: "0px solid" }} anchorEl={anchorElement} open={open} onClick={handleClose} onClose={handleClose}>
        <MenuItem component={RouterLink} to="/user/account">
          <PersonOutlineIcon sx={{ color: "orange" }} />
          <Typography sx={{ marginLeft: 1 }} variant='body2'>我的帳戶</Typography>
        </MenuItem>
        <MenuItem component={RouterLink} to="/user/purchase">
          <ReceiptLongIcon sx={{ color: "green" }} />
          <Typography sx={{ marginLeft: 1 }} variant='body2'>訂單查詢</Typography>
        </MenuItem>
        <MenuItem component={RouterLink} to="/user/collection-list">
          <FavoriteIcon sx={{ color: "red" }} />
          <Typography sx={{ marginLeft: 1 }} variant='body2'>願望清單</Typography>
        </MenuItem>
        <MenuItem component={RouterLink} to="/user/modify-password">
          <KeyOutlinedIcon sx={{ color: "brown" }} />
          <Typography sx={{ marginLeft: 1 }} variant='body2'>修改密碼</Typography>
        </MenuItem>
        <MenuItem component={RouterLink} to="/user/addressed">
          <AddLocationAltOutlinedIcon sx={{ color: "#9f9f9f" }} />
          <Typography sx={{ marginLeft: 1 }} variant='body2'>常用地址</Typography>
        </MenuItem>
      </Menu>

      {/*搜尋欄 */}


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



const searchRecordList = [
  'apple',
  'banana',
  'come',
  'juice',
  'lobby',
  'size of penis',
  'chatgpt',
  'sizelll',
  'running',
  'flower',
  'jizz',
  'joke',
  'tommy',
  'asiagotone',
]