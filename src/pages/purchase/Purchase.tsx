import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


import React, { useState } from 'react'

import ProductImage from '../../assets/朋朋衛生紙商品圖.jpg'
import { Divider } from '@mui/material';

export default function Purchase() {
  const [viewValue, setviewValue] = useState<string>("所有訂單")

  const handleView = (e: React.SyntheticEvent, newVal: string) => {
    setviewValue(newVal)
  }
  return (
    <Container maxWidth='xl' sx={{ border: "0px solid" }}>
      <Grid container columns={8} sx={{ border: "0px solid", marginRight: "10px" }}>
        <Grid item xs={8}>
          <TabContext value={viewValue}>
            <TabList variant='fullWidth' onChange={handleView} sx={{ border: "1px solid #D9D9D9", borderRadius: "4px", marginRight: "10px",backgroundColor:"white" }}>
              {orderStates.map(orderState => (
                <Tab key={orderState} value={orderState} label={orderState} sx={{ border: "0px solid #AFAFAF", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px" }}></Tab>
              ))}
            </TabList>
            {orderStates.map(orderState => (
              <TabPanel key={orderState} value={orderState} sx={{ paddingLeft: "0px", paddingRight: "0px", marginRight: "10px" }}>
                <Stack direction={"row"} sx={{ justifyContent: "end",my:"20px" }}>
                  <Paper sx={{ border: "1px solid #d9d9d9", boxShadow: "none", display: 'flex', alignItems: 'center', width: 350,height:35 }}>
                    <IconButton type="button" sx={{ p: '10px',width:35,height:35,borderRadius:"0px",'&:hover':{background:"white"} }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="輸入訂單編號或是商品名稱查詢訂單"
                      inputProps={{ 'aria-label': '輸入訂單編號或是商品名稱查詢訂單' }}
                    />
                  </Paper>
                </Stack>

                <List>
                  <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Card sx={{ width: "100%", boxShadow: "none", border: "solid 1px #D9D9D9" }}>
                      <Grid container columns={12} sx={{ border: "0px solid purple" }}>
                        <Grid item xs={2}>
                          <CardMedia component="img" sx={{ width: "120px", height: "120px" }} image={ProductImage} alt="product infomation" />
                        </Grid>
                        <Grid item xs={10} sx={{ border: "0px solid orange" }}>
                          <CardContent sx={{ border: "0px solid red", paddingLeft: "30px", paddingRight: "30px", height: "80px" }}>
                            <Grid container columns={8} sx={{ border: "0px solid green", height: "100px" }}>
                              <Grid item xs={6} sx={{ border: "0px solid" }}>
                                <Box sx={{ border: "0px solid", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                  <Typography sx={{ fontWeight: "bold", '&:hover': { cursor: "pointer" } }}>好男人需要時我都在衛生紙(10入)</Typography>
                                  <Typography variant='caption'>規格 : 標準規格</Typography>
                                  <Typography >x 1</Typography>
                                </Box>
                              </Grid>
                              <Grid item xs={2} >
                                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}>
                                  <Stack sx={{ alignItems: "end" }} spacing={"20px"}>
                                    <Typography variant='caption' sx={{ color: "#ef6060" }}>已完成</Typography>
                                    <Typography>NT$100</Typography>
                                  </Stack>
                                </Box>

                              </Grid>
                            </Grid>
                          </CardContent>
                        </Grid>
                      </Grid>

                      <Divider />
                      <Stack sx={{ alignItems: "end", paddingRight: "30px" }} spacing={"20px"}>
                        <Stack direction={"row"} sx={{ marginTop: "20px" }} spacing={"5px"}>
                          <Typography >
                            訂單金額 :
                          </Typography>
                          <Typography sx={{ color: "#ef6060", fontWeight: "bold" }}>
                            NT$100
                          </Typography>
                        </Stack>

                        <CardActions sx={{ paddingRight: 0, marginLeft: 2, paddingBottom: 3, display: "flex", flexDirection: "row", justifyContent: "end" }}>
                          <Button variant="outlined">訂單詳情</Button>
                          <Button variant="contained">重新購買</Button>
                        </CardActions>
                      </Stack>



                    </Card>
                  </ListItem>
                </List>
              </TabPanel>
            ))}


          </TabContext>
        </Grid>
      </Grid>
    </Container>
  )
}

const orderStates: string[] = [
  "所有訂單",
  "待付款",
  "待出貨",
  "待取貨",
  "已完成",
  "已取消",
  "退貨/款"
]

