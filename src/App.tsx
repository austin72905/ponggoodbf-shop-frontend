import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { styled, Stack } from '@mui/system';

import RoutesRegister from './routesRegister/RoutesRegister'
import { routeList,routeAccountList } from './routes/routes'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'


const customTheme = createTheme({
  palette: {
    primary: {
      main: "#61D1BD"
    },
    secondary: {
      main: orange[500]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <TopBar />
        <Container sx={{ marginTop: "28px",border:"0px solid" }}>
          <Stack direction="row" spacing={3} divider={<Divider orientation="vertical" flexItem />}>
            <SideBar routeList={routeList} routeAccountList={routeAccountList}/>
            <Box>
              <RoutesRegister routeList={routeList} routeAccountList={routeAccountList}/>
            </Box>
          </Stack>

        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
