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
      <Stack spacing={1} sx={{ minHeight: "700px", mx: 1, mt: 2.5, border: "1px solid #D9D9D9", borderRadius: "4px",backgroundColor:"white" }}>

        <ItemWrapper sx={{ mt: 4 }}>
          <Typography variant='h6' sx={{ fontWeight: "bold" }}>我的帳戶</Typography>
        </ItemWrapper>

        <InputSet label='姓名' placeholder='不得包含特殊符號 / $ . @ & # @...'/>
        <InputSet label='電話' placeholder='ex: 09xxxxxxxx'/>
        <InputSet label='信箱' placeholder='ex: asbc@gmail.com'/>
        

        <ItemWrapper>
          <Typography variant='caption' >生日</Typography>
          <Stack direction={"row"} spacing={3} sx={{mt: 2 }}>
            <TextField defaultValue={1} select label="日"inputProps={{ sx: { height: "15px" } }} sx={{ width: "33%" }} size='small'>
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

        <ItemWrapper sx={{pt:3}}>
        <Button variant="contained" sx={{"& .MuiButton-text":{color:"white"}}}>儲存變更</Button>
        </ItemWrapper>
      </Stack>
    </Container>
  )
}


interface InputSetProps{
  label:string;
  placeholder:string;
}

const InputSet=({label,placeholder}:InputSetProps)=>{


  return(
  <Stack spacing={1} sx={{pt:1,px:4}}>
    <Typography variant='caption' >{label}</Typography>
    <TextField placeholder={placeholder} inputProps={{ sx: { height: "15px" } }}  size='small'  />
  </Stack>
  )
  
}

const ItemWrapper = styled(Box)({
  paddingTop: "8px",
  paddingLeft: "32px",
  paddingRight: "32px"
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