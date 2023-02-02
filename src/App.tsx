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
import Divider from '@mui/material/Divider';
import { styled, Stack } from '@mui/system';
import IconButton from '@mui/material/IconButton';

import RoutesRegister from './routesRegister/RoutesRegister'
import { routeList, routeAccountList } from './routes/routes'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import InstagramImageBlack from './assets/iconmonstr-instagram-11.svg'
import InstagramImage from './assets/Instagram_logo_2016.svg'
import SvgIcon from '@mui/material/SvgIcon';
import Icon from '@mui/material/Icon';


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

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ minHeight: "100vh", border: "0px solid", backgroundColor: "#fefefe" }}>
        <TopBar />
        <Toolbar />

        <Container sx={{ marginTop: "28px", border: "0px solid" }}>
          <Stack direction="row" spacing={3} divider={<Divider orientation="vertical" flexItem />}>
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
                <IconButton sx={{ border: "1px solid #e5e5e5",width: "40px", height: "40px" }} onMouseEnter={() => setInstgramIsHover(s => InstagramImage)} onMouseLeave={() => setInstgramIsHover(s => InstagramImageBlack)}>
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

    </ThemeProvider>
  );
}

export default App;
