import React from 'react'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
export default function MyAccount() {
  return (
    <Container sx={{ border: "0px solid" }} maxWidth='xl'>
      <Stack spacing={"10px"} sx={{ minHeight: "700px", marginLeft: "10px", marginRight: "10px", marginTop: "20px", border: "1px solid #D9D9D9", borderRadius: "4px" }}>

        <ItemWrapper sx={{ marginTop: "30px" }}>
          <Typography variant='h6' sx={{ fontWeight: "bold" }}>我的帳戶</Typography>
        </ItemWrapper>


        <ItemWrapper >
          <Typography variant='caption' >姓名</Typography>
          <TextField inputProps={{ sx: { height: "15px" } }} sx={{ marginTop: "10px" }} size='small' fullWidth />
        </ItemWrapper>

        <ItemWrapper>
          <Typography variant='caption' >電話</Typography>
          <TextField inputProps={{ sx: { height: "15px" } }} sx={{ marginTop: "10px" }} size='small' fullWidth />
        </ItemWrapper>
        <ItemWrapper>
          <Typography variant='caption' >信箱</Typography>
          <TextField inputProps={{ sx: { height: "15px" } }} sx={{ marginTop: "10px" }} size='small' fullWidth />
        </ItemWrapper>

        <ItemWrapper>
          <Typography variant='caption' >生日</Typography>
          <Stack direction={"row"} spacing={3} sx={{marginTop: "15px" }}>
            <TextField defaultValue={1} select label="日" inputProps={{ sx: { height: "15px" } }} sx={{ width: "33%" }} size='small'>
              {
                dateList(31).map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))
              }
            </TextField>
            <TextField defaultValue={1} select label="月" inputProps={{ sx: { height: "15px" } }} sx={{ width: "33%" }} size='small'>
              {
                dateList(12).map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))
              }
            </TextField>
            <TextField defaultValue={thisYear-10} select label="年" inputProps={{ sx: { height: "15px" } }} sx={{ width: "33%" }} size='small'>
              {
                yearList(2023).map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))
              }
            </TextField>
          </Stack>

        </ItemWrapper>
        <ItemWrapper>
          <FormControl>
            <Typography variant='caption' >性別</Typography>
            <RadioGroup row>
              <FormControlLabel value={"男"} control={<Radio sx={{ color: "#D9D9D9" }} />} label="男" />
              <FormControlLabel value={"女"} control={<Radio sx={{ color: "#D9D9D9" }} />} label="女" />
              <FormControlLabel value={"其他"} control={<Radio sx={{ color: "#D9D9D9" }} />} label="其他" />
            </RadioGroup>
          </FormControl>
        </ItemWrapper>

        <ItemWrapper sx={{paddingTop:"25px"}}>
        <Button variant="contained" sx={{"& .MuiButton-text":{color:"white"}}}>儲存變更</Button>
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

const dateList = (n:number) => {
  let daysList: number[] = []
  for (let index = 1; index < n+1; index++) {

    daysList.push(index);
  }

  return daysList;
}

const thisYear=2023

const yearList=(thisYear:number)=>{
  let daysList: number[] = []
  for (let index = thisYear-10; index > thisYear-30; index--) {

    daysList.push(index);
  }

  return daysList;
}