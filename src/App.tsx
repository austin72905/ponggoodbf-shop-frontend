import React, { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import { styled, Stack } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SendIcon from '@mui/icons-material/Send';

import RoutesRegister from './routesRegister/RoutesRegister'
import ScrollToTop from "./components/ScrollToTop";
import { routeList, routeAccountList } from './routes/routes'

import { useLocation, useNavigate } from 'react-router-dom'

import InstagramImageBlack from './assets/instagram-gray.svg'
import InstagramImage from './assets/Instagram_logo_2016.svg'
import SvgIcon from '@mui/material/SvgIcon';
import Icon from '@mui/material/Icon';
import { Paper } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

import LogoImage from './assets/朋朋大頭貼.jpg'

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#61D1BD",
      contrastText: "white"
    },
    secondary: {
      main: orange[500]
    }
  }
})

function App() {

  const [instgramIsHover, setInstgramIsHover] = useState(InstagramImageBlack)

  const { pathname } = useLocation()

  const [chatOpen, setChatOpen] = useState(false)


  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ minHeight: "100vh", border: "0px solid", backgroundColor: "#fefefe" }}>
        <TopBar />
        <Toolbar />
        <ScrollToTop />
        <Container sx={{ marginTop: "28px", border: "0px solid" }}>
          <Stack direction="row" spacing={3} divider={(pathname.includes("/login") || pathname.includes("/signup")) ? null : <Divider orientation="vertical" flexItem />}>
            <SideBar routeList={routeList} routeAccountList={routeAccountList} />
            <Box sx={{ width: "100%" }}>
              <RoutesRegister routeList={routeList} routeAccountList={routeAccountList} />
            </Box>
          </Stack>

        </Container>
      </Box>
      <Box sx={{ mt: "30px", border: "1px solid #fafafa", backgroundColor: "#fafafa" }}>
        <Container sx={{ marginTop: "30px", border: "0px solid" }}>
          <Container sx={{ border: "0px solid" }} maxWidth='xl'>
            <footer>
              <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} sx={{ m: "20px" }} spacing={"15px"}>
                <p>關於我們</p>
                <IconButton sx={{ border: "1px solid #e5e5e5", width: "40px", height: "40px" }} onMouseEnter={() => setInstgramIsHover(s => InstagramImage)} onMouseLeave={() => setInstgramIsHover(s => InstagramImageBlack)}>
                  <Icon >
                    <img src={instgramIsHover} style={{ width: "25px", height: "25px" }} />
                  </Icon>

                </IconButton>
              </Stack>


            </footer>
            <Divider />
            <footer>
              <Stack direction={"row"} justifyContent={"center"} sx={{ m: "30px" }} spacing={"5px"}>
                <Typography sx={{ color: "#9c9c9c", fontWeight: "bold" }}>© 2023</Typography>
                <Typography sx={{ color: "#3E8FB2", fontWeight: "bold" }}>ponggoodbf</Typography>
                <Typography sx={{ color: "#9c9c9c", fontWeight: "bold" }}>All Rights Reserved.</Typography>
              </Stack>


            </footer>
          </Container>

        </Container>

      </Box>
      {/*聊天室 */}
      <Box sx={{ bottom: "0px", right: "30px", border: "0px solid #9c9c9c", position: "fixed", zIndex: 9999 }} >
        <Paper sx={{width: "280px"}}>
          {/*聊天室top */}
          <Stack onClick={() => { setChatOpen(s => !s) }} justifyContent={"space-between"} direction={"row"} sx={{ background: "#61D1BD", border: "0px solid #9c9c9c", width: "280px", height: "35px", alignItems: "center" }} >
            <Stack alignItems={"center"} sx={{ border: "0px solid #9c9c9c" }} direction={"row"} >
              <Badge badgeContent={chatRecord.length} max={99} color='error' >
                <ChatOutlinedIcon style={{ color: 'white' }} sx={{ width: "25px", height: "25px", pl: "15px" }} />
              </Badge>

              <Typography variant='body1' sx={{ pl: "15px", letterSpacing: "5px", color: "white" }}>聯絡賣家</Typography>
            </Stack>

            <Box sx={{ mr: "10px" }} >
              {chatOpen ?
                <ArrowDropDownIcon sx={{ color: "white", "&:hover": { color: "black" } }} />
                :
                <ArrowDropUpIcon sx={{ color: "white", "&:hover": { color: "black" } }} />
              }


            </Box>


          </Stack>

          <Stack justifyContent={"space-between"} sx={{ height: "400px", display: chatOpen ? "flex" : "none" }}>
            {/*聊天紀錄 */}
            <Box sx={{ height: "350px" }}>

              <List sx={{ maxWidth: "280px", maxHeight: "347px", overflow: 'auto' }}>
                {
                  chatRecord.map((chat, index) =>
                  (

                    <React.Fragment key={index}>

                      {/*是否寫是時間 */}
                      {
                        chat.isTodayFirstMsg
                          ?
                          <ListItem sx={{ py: "1px", px: "10px", border: "0px solid #d9d9d9" }}>
                            <ListItemText sx={{ border: "0px solid #d9d9d9" }} primary={<Stack direction={"row"} justifyContent={"center"}><Typography variant='caption'>{chat.date}</Typography></Stack>} />
                          </ListItem>
                          :
                          null
                      }
                      {
                        chat.isAdmin
                        ?
                        <ListItem alignItems="flex-start" sx={{ border: "0px solid #d9d9d9", py: "1px", px: "10px" }}>
                          <ListItemAvatar sx={{ '&.MuiListItemAvatar-root': { minWidth: "40px" }, border: "0px solid #d9d9d9", mr: "5px" }}>
                            <Avatar alt="LogoImage" src={LogoImage} />
                          </ListItemAvatar>
                          <Stack spacing={"2px"} direction={"row"} sx={{ border: "0px solid #d9d9d9" }}>

                            <ListItemText sx={{ py: "6px", px: "10px", border: "1px solid #d9d9d9", borderRadius: "20px" }} primary={<Typography variant='subtitle2' sx={{ border: "0px solid #d9d9d9" }} >{chat.msg}</Typography>} />

                          </Stack>
                        </ListItem>
                        :
                        <ListItem sx={{ border: "0px solid #d9d9d9", display: "flex", flexDirection: "row", justifyContent: "end", py: "1px", px: "10px" }}>
                          <Box sx={{ border: "0px solid #d9d9d9" }}>
                            <ListItemText sx={{ py: "6px", px: "10px", backgroundColor: "#96DB8B", border: "1px solid #d9d9d9", borderRadius: "20px" }} primary={<Typography variant='subtitle2' sx={{ border: "0px solid #d9d9d9" }} >{chat.msg}</Typography>} />
                          </Box>

                        </ListItem>
                      }

                    </React.Fragment>

                  ))
                }
                
              </List>
            </Box>
            {/*訊息輸入框 */}
            <Stack direction={"row"} sx={{ justifyContent: "end" }}>
              <Paper sx={{ border: "1px solid #d9d9d9", boxShadow: "none", display: 'flex', alignItems: 'center', width: "280px", height: 35 }}>

                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="輸入訊息"
                  inputProps={{ 'aria-label': '輸入訊息' }}
                />

                <SendIcon sx={{ p: '10px', width: "20px", height: "20px", borderRadius: "0px", '&:hover': { cursor: "pointer" } }} aria-label="send" />

              </Paper>
            </Stack>
          </Stack>

        </Paper>

      </Box>


    </ThemeProvider>
  );
}


interface Chat {
  isAdmin: boolean;
  msg: string;
  date: string;
  isTodayFirstMsg:boolean;
}

const chatRecord: Chat[] = [
  {
    isAdmin: true,
    msg: "請問有下單嗎?請問有下單嗎?請問有下單嗎?請問有下單嗎?請問有下單嗎?請問有下單嗎?請問有下單嗎?請問有下單嗎?請問有下單嗎?請問有下單嗎?請問有下單嗎?請問有下單嗎?",
    date: "2023/2/5 下午06:29",
    isTodayFirstMsg:true
  },
  {
    isAdmin: false,
    msg: "是的，請問何時出貨?",
    date: "2023/2/5 下午07:29",
    isTodayFirstMsg:false
  },
  {
    isAdmin: false,
    msg: "一次買10個可以免運嗎?",
    date: "2023/2/5 下午07:30",
    isTodayFirstMsg:false
  },
  {
    isAdmin: false,
    msg: "??",
    date: "2023/2/6 下午13:30",
    isTodayFirstMsg:true
  },
  {
    isAdmin: true,
    msg: "付款完就會出貨",
    date: "2023/2/8 下午01:13",
    isTodayFirstMsg:true
  },
  {
    isAdmin: false,
    msg: "那麼晚才回是不想做生意了?",
    date: "2023/2/8 下午01:30",
    isTodayFirstMsg:false
  }



]

export default App;
