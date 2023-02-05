import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Checkbox from '@mui/material/Checkbox';

export default function SignUp() {
  const navigate = useNavigate()

  const toLogin = () => {
    navigate("/login")
  }
  return (
    <Container sx={{ border: "0px solid" }} maxWidth='xl'>
      <Stack justifyContent={"center"} direction={"row"} sx={{ border: "1px solid #9f9f9f", mt: "30px", borderRadius: "4px" }}>

        <Stack spacing={"20px"} sx={{ border: "0px solid", minHeight: "800px", minWidth: "400px",my:"30px" }} justifyContent={"center"}>
          <Stack alignItems={"center"}>
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>註冊新會員</Typography>
          </Stack>

          <ItemWrapper >
            <Typography variant='body1' >姓名</Typography>
            <TextField placeholder='不得包含特殊符號 / $ . @ & # @...'  sx={{ marginTop: "10px" }}  fullWidth />
          </ItemWrapper>
         
          <ItemWrapper>
            <Typography variant='body1' >信箱</Typography>
            <TextField placeholder='ex: asbc@gmail.com'  sx={{ marginTop: "10px" }}  fullWidth />
          </ItemWrapper>


          <ItemWrapper>
            <Typography variant='body1' >帳號</Typography>
            <TextField placeholder='請輸入帳號' sx={{ marginTop: "10px" }} autoComplete='off' fullWidth />
          </ItemWrapper>

          <ItemWrapper>
            <Typography variant='body1' >密碼</Typography>
            <TextField placeholder='請輸入密碼' sx={{ marginTop: "10px" }} autoComplete='off' fullWidth />
          </ItemWrapper>

          <ItemWrapper >
                    <Typography variant='body1' >密碼確認</Typography>
                    <TextField placeholder='請再次確認輸入密碼'  sx={{ marginTop: "10px" }}  fullWidth />
                </ItemWrapper>

          <ItemWrapper>
            <Button sx={{ marginTop: "10px" }} variant='contained' size='large' fullWidth>加入會員</Button>
          </ItemWrapper>

          <ItemWrapper>
            <Stack spacing={"10px"} direction={"row"}>
              <Typography variant='body2' sx={{ color: "#9f9f9f" }}>已經有會員了?</Typography>
              <Typography variant='body2' sx={{ color: "#3E8FB2", cursor: "pointer" }} onClick={toLogin}>登入</Typography>
            </Stack>

          </ItemWrapper>


        </Stack>



      </Stack>

    </Container>

  )
}


const ItemWrapper = styled(Box)({
  paddingTop: "5px",

})