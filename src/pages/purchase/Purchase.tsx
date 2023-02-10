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
import Stepper from '@mui/material/Stepper';
import MobileStepper from '@mui/material/MobileStepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


import React, { useState } from 'react'

import ProductImage from '../../assets/朋朋衛生紙商品圖.jpg'
import { Divider } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function Purchase() {

  const { pathname } = useLocation();
  //console.log("pathname",pathname)
  const lastPath = pathname.split('/')
  //console.log("lastPath",lastPath)

  const [orderInfoDetail, setOrderInfoDetail] = useState<OrderInfomation>(orderInfo)


  //{lastPath.includes("TX")?}
  return (
    <Container maxWidth='xl' sx={{ border: "0px solid" }}>
      {lastPath[lastPath.length - 1].includes("TX") ? <OrderDetail orderInfo={orderInfoDetail} /> : <PurchaseRecord setOrderInfoDetail={setOrderInfoDetail} />}

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

const StepIcon = (props: StepIconProps) => {

  const { active, completed, className } = props
  //console.log("active", active)

  return (
    <StepIconRoot>
      {completed ? (
        <div />
      ) : (
        <div className="step-uncompleted" />
      )}
    </StepIconRoot>

  )
}

const StepIconRoot = styled('div')(({ theme }) => ({
  marginLeft: "5px",
  borderRadius: '50%',
  background: theme.palette.primary.main,
  width: 15,
  height: 15,
  '& .step-uncompleted': {
    borderRadius: '50%',
    width: 15,
    height: 15,
    backgroundColor: '#AFAFAF',
  },

}))




const StepDetailConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {

  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.root}`]: {
      background: theme.palette.primary.main
    },
  },
}))

interface OrderStepInfomation {
  unachieveDescription: string;
  achieveDescription: string;
  date: string
}

const orderStepInfomationList: OrderStepInfomation[] = [
  {
    unachieveDescription: "訂單未成立",
    achieveDescription: "訂單已成立",
    date: "2022-12-10 13:10:16"
  },
  {
    unachieveDescription: "未收到款項",
    achieveDescription: "已收款",
    date: "2022-12-14 00:01:55"
  },
  {
    unachieveDescription: "尚未出貨",
    achieveDescription: "已出貨",
    date: "2022-12-15 08:30:33"
  },
  {
    unachieveDescription: "尚未完成訂單",
    achieveDescription: "已完成訂單",
    date: "2022-12-22 10:10:09"
  },
]


interface CargoInfomation {
  description: string;
  date: string;
}

const cargoInfomation: CargoInfomation[] = [
  {
    description: "買家取件成功",
    date: "2022-12-20 10:10:09"
  },
  {
    description: "包裹已送達",
    date: "2022-12-18 01:30:33"
  },
  {
    description: "包裹寄送中",
    date: "2022-12-16 08:01:55"
  },
  {
    description: "已寄件",
    date: "2022-12-15 00:10:16"
  },
]

//訂單細節
const OrderDetail = ({ orderInfo }: OrderDetailProps) => {

  const navigate = useNavigate()

  const [achieveStep, setAchieveStep] = useState<number>(2)

  const [cargoStep, setCargoStep] = useState<number>(1)

  const goBackToPurchaseOrder = () => {
    navigate("/user/purchase")
  }

  return (
    <Grid rowSpacing={"20px"} columnSpacing={"20px"} container columns={8} sx={{ border: "0px solid", marginRight: "10px" }}>

      <Grid item xs={8} sx={{ border: "0px solid" }}>

        <Paper sx={{ boxShadow: "none", border: "1px solid #d9d9d9" }}>
          <Stack>
            <Stack onClick={goBackToPurchaseOrder} direction={"row"} sx={{ border: "0px solid", '&:hover': { cursor: "pointer" }, width: 100, height: 30, mt: 1, ml: 1, mb: 0 }}>
              <KeyboardArrowLeftIcon />
              <Typography>上一頁</Typography>
            </Stack>
            <Divider />
            <Stack direction={"row"} spacing={3} justifyContent={"end"} sx={{ mr: 3, mt: 3 }}>
              <Typography>訂單編號 : {orderInfo.recordCode}</Typography>
              <Typography sx={{ color: orderStatusColor.get(orderInfo.status) }}>{orderStatus.get(orderInfo.status)}訂單</Typography>{/**#96DB8B #ef6060 */}
            </Stack>
            {/*訂單流程圖 */}
            <Box sx={{ border: "0px solid", mt: 1, ml: 1, py: 4, px: 4 }}>
              <Stepper activeStep={achieveStep} alternativeLabel>
                {orderStepInfomationList.map((step, index) => (
                  <Step key={step.unachieveDescription}>
                    <StepLabel>
                      <Stack>
                        <Typography variant='caption'>
                          {achieveStep > index ? step.achieveDescription : step.unachieveDescription}
                        </Typography>
                        <Typography variant='caption'>
                          {achieveStep > index ? step.date : ""}
                        </Typography>

                      </Stack>

                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Stack>
        </Paper>

      </Grid>
      <Grid item xs={4} sx={{ border: "0px solid" }}>

        <Paper sx={{ height: "250px", boxShadow: "none", border: "1px solid #d9d9d9" }}>
          <Stack spacing={4} sx={{ ml: 3, mt: 3, pb: 3 }}>
            <Typography sx={{ fontWeight: "bold" }}>收件地址</Typography>
            <Stack spacing={1}>
              <Typography variant='caption'>{orderInfo.address.receiver}</Typography>
              <Typography variant='caption'>{orderInfo.address.phoneNumber}</Typography>
              <Typography variant='caption'>
                {orderInfo.address.cargoAddress}
              </Typography>
            </Stack>
          </Stack>

        </Paper>
      </Grid>
      <Grid item xs={4} sx={{ border: "0px solid" }}>
        <Paper sx={{ height: "250px", boxShadow: "none", border: "1px solid #d9d9d9" }}>
          <Stack spacing={4} sx={{ ml: 3, mt: 3, pb: 3 }}>
            <Typography sx={{ fontWeight: "bold" }}>物流詳細情況</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", border: "0px solid", mt: 1, ml: 1, py: 0, px: 0 }}>
              <Stepper activeStep={cargoStep} orientation='vertical' >
                {cargoInfomation.map((step, index) => (
                  <Step key={step.description}>
                    <StepLabel sx={{ '&.MuiStepLabel-root': { p: 0, m: 0 } }} StepIconComponent={StepIcon}>
                      <Stack direction={"row"} spacing={"10px"}>
                        <Typography variant='caption'>
                          {step.date}
                        </Typography>
                        <Typography variant='caption'>
                          {step.description}
                        </Typography>


                      </Stack>

                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Stack>

        </Paper>
      </Grid>
      <Grid item xs={8} sx={{ border: "0px solid" }}>
        <Paper sx={{ boxShadow: "none", border: "1px solid #d9d9d9" }}>
          <Stack spacing={4} sx={{ ml: 3, mt: 3, pb: 3 }}>
            <Typography sx={{ fontWeight: "bold" }}>訂單資訊</Typography>
            <Card sx={{ width: "100%", boxShadow: "none", border: "solid 0px #D9D9D9" }}>
              <Grid container columns={12} sx={{ border: "0px solid purple" }}>
                <Grid item xs={2}>
                  <CardMedia component="img" sx={{ width: "120px", height: "120px" }} image={ProductImage} alt="product infomation" />
                </Grid>
                <Grid item xs={10} sx={{ border: "0px solid orange" }}>
                  <CardContent sx={{ border: "0px solid red", pl: 4, pr: 4, height: "80px" }}>
                    <Grid container columns={8} sx={{ border: "0px solid green", height: "100px" }}>
                      <Grid item xs={6} sx={{ border: "0px solid" }}>
                        <Box sx={{ border: "0px solid", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                          <Typography sx={{ fontWeight: "bold", '&:hover': { cursor: "pointer" } }}>{orderInfo.productName}</Typography>
                          <Typography variant='caption'>規格 : {orderInfo.size}</Typography>
                          <Typography >x 1</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={2} >
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}>
                          <Stack sx={{ alignItems: "end" }} spacing={3}>
                            <Typography variant='caption' sx={{ color: orderStatusColor.get(orderInfo.status) }}>{orderStatus.get(orderInfo.status)}</Typography>
                            <Typography>NT${orderInfo.orderPrice}</Typography>
                          </Stack>
                        </Box>

                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>

              <Divider />
              <Grid container columns={12}>
                <Grid item xs={9}></Grid>
                <Grid item xs={3}>
                  <Grid container columns={4} sx={{ mt: 4, pr: 4 }}>
                    <Grid item xs={2}>
                      <Stack spacing={3} sx={{ border: "0px solid", alignItems: "start" }}>
                        <Typography >
                          商品金額
                        </Typography>
                        <Typography >
                          運費
                        </Typography>
                        <Typography >
                          總計
                        </Typography>
                        <Typography >
                          付款方式
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={2}>
                      <Stack spacing={3} sx={{ border: "0px solid", alignItems: "end" }}>
                        <Typography >
                          NT${orderInfo.prouctPrice}
                        </Typography>
                        <Typography >
                          NT${orderInfo.cargoPrice}
                        </Typography>
                        <Typography sx={{ color: "#ef6060", fontWeight: "bold" }}>
                          NT${orderInfo.orderPrice}
                        </Typography>
                        <Typography >
                          {orderInfo.payWay}
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>


            </Card>
          </Stack>

        </Paper>
      </Grid>
    </Grid>
  )
}

const orderAddress: OrderAddress = {
  receiver: "林駿朋",
  phoneNumber: "(+886)970588457",
  cargoAddress: "7-11 雅典門市 台中市南區三民西路377號西川一路1號 店號950963"
}

interface PurchaseRecordProps {
  setOrderInfoDetail: React.Dispatch<React.SetStateAction<OrderInfomation>>;
}

interface OrderDetailProps {
  orderInfo: OrderInfomation;

}

interface OrderInfomation {
  recordCode: string;
  productName: string;
  prouctPrice: number;
  orderPrice: number;
  size: string;
  count: number;
  address: OrderAddress;
  status: string;
  cargoPrice: number;
  payWay: string;
  cargoInfomation: CargoInfomation[];
  orderStepInfomation: OrderStepInfomation[];

}

const orderStatus = new Map([
  ["1", "已完成"],
  ["0", "待取貨"],
  ["2", "已取消"],
  ["3", "待付款"],
  ["4", "待出貨"],
  ["5", "退貨/款"]
])

const orderStatusColor = new Map([
  ["1", "#ef6060"],
  ["0", "#96DB8B"],
  ["2", "#7E7E7E"],
  ["3", "#96DB8B"],
  ["4", "#96DB8B"],
  ["5", "#7E7E7E"]
])

interface OrderAddress {
  receiver: string;
  phoneNumber: string;
  cargoAddress: string;
}

const orderInfo: OrderInfomation = {
  recordCode: "TX20230122063253",
  productName: "好男人需要時我都在衛生紙(10入)",
  prouctPrice: 100,
  orderPrice: 139,
  count: 1,
  size: "標準規格",
  address: orderAddress,
  cargoInfomation: cargoInfomation,
  orderStepInfomation: orderStepInfomationList,
  status: "1",
  cargoPrice: 39,
  payWay: "LinePay"
}

const orderInfoList: OrderInfomation[] = [
  orderInfo,
  { ...orderInfo, recordCode: "TX20230122063254" },
  { ...orderInfo, status: "4" },
  { ...orderInfo, status: "2",recordCode: "TX20230122063256" }
]

//訂單頁面
const PurchaseRecord = ({ setOrderInfoDetail }: PurchaseRecordProps) => {

  const navigate = useNavigate();
  const [viewValue, setviewValue] = useState<string>("所有訂單")

  const handleView = (e: React.SyntheticEvent, newVal: string) => {
    setviewValue(newVal)
  }

  const goOrderDetail = (orderInfo: OrderInfomation) => {
    setOrderInfoDetail(orderInfo)
    navigate(`/user/purchase/${orderInfo.recordCode}`)
  }


  return (
    <Grid container columns={8} sx={{ border: "0px solid", mr: 1 }}>
      <Grid item xs={8}>
        <TabContext value={viewValue}>
          <TabList variant='fullWidth' onChange={handleView} sx={{ border: "1px solid #D9D9D9", borderRadius: "4px", mr: 1, backgroundColor: "white" }}>
            {orderStates.map(orderState => (
              <Tab key={orderState} value={orderState} label={orderState} sx={{ border: "0px solid #AFAFAF", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px" }}></Tab>
            ))}
          </TabList>
          {orderStates.map(orderState => (
            <TabPanel key={orderState} value={orderState} sx={{ px: 0, mr: 1 }}>


              <Stack direction={"row"} sx={{ justifyContent: "end", my: 3 }}>
                {/*搜尋欄 */}
                <Paper sx={{ border: "1px solid #d9d9d9", boxShadow: "none", display: 'flex', alignItems: 'center', width: 350, height: 35 }}>
                  <IconButton type="button" sx={{ p: 1, width: 35, height: 35, borderRadius: "0px", '&:hover': { background: "white" } }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="輸入訂單編號或是商品名稱查詢訂單"
                    inputProps={{ 'aria-label': '輸入訂單編號或是商品名稱查詢訂單' }}
                  />
                </Paper>

              </Stack>

              {/*訂單們 */}
              <List>
                {
                  orderInfoList.map((info, index) => {

                    if( orderStatus.get(info.status) !=viewValue && viewValue!="所有訂單"){
                      return null
                    }
                    
                    return (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <Card sx={{ width: "100%", boxShadow: "none", border: "solid 1px #D9D9D9" }}>
                          <Grid container columns={12} sx={{ border: "0px solid purple" }}>
                            <Grid item xs={2}>
                              <CardMedia component="img" sx={{ width: "120px", height: "120px" }} image={ProductImage} alt="product infomation" />
                            </Grid>
                            <Grid item xs={10} sx={{ border: "0px solid orange" }}>
                              <CardContent sx={{ border: "0px solid red", px: 4, height: "80px" }}>
                                <Grid container columns={8} sx={{ border: "0px solid green", height: "100px" }}>
                                  <Grid item xs={6} sx={{ border: "0px solid" }}>
                                    <Box sx={{ border: "0px solid", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                      <Typography sx={{ fontWeight: "bold", '&:hover': { cursor: "pointer" } }} onClick={() => { goOrderDetail(info) }}>{info.productName}</Typography>
                                      <Typography variant='caption'>規格 : {info.size}</Typography>
                                      <Typography >x {info.count}</Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={2} >
                                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}>
                                      <Stack sx={{ alignItems: "end" }} spacing={3}>
                                        <Typography variant='caption' sx={{ color: orderStatusColor.get(info.status) }}>{orderStatus.get(info.status)}</Typography>
                                        <Typography>NT${info.prouctPrice}</Typography>
                                      </Stack>
                                    </Box>

                                  </Grid>
                                </Grid>
                              </CardContent>
                            </Grid>
                          </Grid>

                          <Divider />
                          <Stack sx={{ alignItems: "end", pr: 4 }} spacing={4}>
                            <Stack direction={"row"} sx={{ mt: 3 }} spacing={0.5}>
                              <Typography >
                                訂單金額 :
                              </Typography>
                              <Typography sx={{ color: "#ef6060", fontWeight: "bold" }}>
                                NT${info.orderPrice}
                              </Typography>
                            </Stack>

                            <CardActions sx={{ pr: 0, ml: 2, pb: 3, display: "flex", flexDirection: "row", justifyContent: "end" }}>
                              <Button variant="outlined" onClick={() => { goOrderDetail(info) }}>訂單詳情</Button>
                              <Button variant="contained">重新購買</Button>
                            </CardActions>
                          </Stack>



                        </Card>
                      </ListItem>
                    )


                  })
                }

              </List>
            </TabPanel>
          ))}


        </TabContext>
      </Grid>
    </Grid>
  )
}