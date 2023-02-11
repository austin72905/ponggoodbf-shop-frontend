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

                <InputSet label='舊密碼' placeholder='請輸入舊密碼' />
                <InputSet label='新密碼' placeholder='請輸入新密碼' helperText="請輸入8個字元以上的英文字母及數字，不可使用特殊符號。" />
                <InputSet label='新密碼確認' placeholder='請再次確認輸入新密碼' />

                <ItemWrapper sx={{ pt: 5 }}>
                    <Button variant="contained" sx={{ color: "white" }}>確認修改</Button>
                </ItemWrapper>
            </Stack>
        </Container>
    )
}

const ItemWrapper = styled(Box)({
    paddingTop: "8px",
    paddingLeft: "32px",
    paddingRight: "32px"
})

interface InputSetProps {
    label: string;
    placeholder: string;
    helperText?: string;
}

const InputSet = ({ label, placeholder, helperText }: InputSetProps) => {


    return (
        <Stack spacing={1} sx={{ pt: 1, px: 4 }}>
            <Typography variant='caption' >{label}</Typography>
            <TextField helperText={helperText} placeholder={placeholder} inputProps={{ sx: { height: "15px" } }} size='small' />
        </Stack>
    )

}