import React from 'react'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function ModifyPassword() {
    return (
        <Container sx={{ border: "0px solid" }} maxWidth='xl'>
            <Stack spacing={"10px"} sx={{ minHeight: "500px", marginLeft: "10px", marginRight: "10px", marginTop: "20px", border: "1px solid #D9D9D9", borderRadius: "4px", backgroundColor: "white" }}>
                <ItemWrapper sx={{ marginTop: "30px" }}>
                    <Typography variant='h6' sx={{ fontWeight: "bold" }}>更改密碼</Typography>
                </ItemWrapper>

                <ItemWrapper >
                    <Typography variant='caption' >舊密碼</Typography>
                    <TextField placeholder='請輸入舊密碼' inputProps={{ sx: { height: "15px" } }} sx={{ marginTop: "10px" }} size='small' fullWidth />
                </ItemWrapper>

                <ItemWrapper >
                    <Typography variant='caption' >新密碼</Typography>
                    <TextField helperText="請輸入8個字元以上的英文字母及數字，不可使用特殊符號。" placeholder='請輸入新密碼' inputProps={{ sx: { height: "15px" } }} sx={{ marginTop: "10px" }} size='small' fullWidth />
                </ItemWrapper>

                <ItemWrapper >
                    <Typography variant='caption' >新密碼確認</Typography>
                    <TextField placeholder='請再次確認輸入新密碼' inputProps={{ sx: { height: "15px" } }} sx={{ marginTop: "10px" }} size='small' fullWidth />
                </ItemWrapper>
                <ItemWrapper sx={{ paddingTop: "40px" }}>
                    <Button variant="contained" sx={{ color: "white"}}>確認修改</Button>
                </ItemWrapper>
            </Stack>
        </Container>
    )
}

const ItemWrapper = styled(Box)({
    paddingTop: "5px",
    paddingLeft: "30px",
    paddingRight: "30px"
})