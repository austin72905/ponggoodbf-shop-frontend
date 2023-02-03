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

export default function Login() {

    const navigate=useNavigate()

    const toSignUp=()=>{
        navigate("/signup")
    }
    return (
        <Container sx={{ border: "0px solid" }} maxWidth='xl'>
            <Stack justifyContent={"center"} direction={"row"} sx={{ border: "1px solid #9f9f9f", mt: "30px",borderRadius:"4px" }}>

                <Stack spacing={"20px"} sx={{ border: "0px solid", minHeight: "600px", minWidth: "400px" }} justifyContent={"center"}>
                    <Stack alignItems={"center"}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>會員登入</Typography>
                    </Stack>


                    <ItemWrapper>
                        <Typography variant='body1' >帳號</Typography>
                        <TextField placeholder='請輸入帳號' sx={{ marginTop: "10px" }} autoComplete='off' fullWidth />
                    </ItemWrapper>

                    <ItemWrapper>
                        <Typography variant='body1' >密碼</Typography>
                        <TextField placeholder='請輸入密碼' sx={{ marginTop: "10px" }} autoComplete='off' fullWidth />
                        <Stack sx={{ mt: "8px",border: "0px solid"}} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>

                            <FormControlLabel sx={{ ml:"1px",border: "0px solid"  }} control={<Checkbox sx={{ border: "0px solid", width: "25px", height: "25px" }} />} label={<Typography sx={{px:"5px"}} variant='subtitle2'>記住我</Typography>} />


                            <Typography variant='body2' sx={{ color: "#3E8FB2" }}>忘記密碼?</Typography>
                        </Stack>

                    </ItemWrapper>

                    <ItemWrapper>
                        <Button sx={{ marginTop: "10px" }} variant='contained' size='large' fullWidth>登入</Button>
                    </ItemWrapper>

                    <ItemWrapper>
                        <Stack spacing={"10px"} direction={"row"}>
                            <Typography variant='body2' sx={{color:"#9f9f9f"}}>還沒有帳號嗎?</Typography>
                            <Typography variant='body2' sx={{ color: "#3E8FB2",cursor:"pointer" }} onClick={toSignUp}>註冊新會員</Typography>
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