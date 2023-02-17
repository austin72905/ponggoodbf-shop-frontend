import React, { useContext } from 'react'
import { CartContext } from '../../contextStore/context'
import { ProductInfomationCount } from '../cart/Cart'

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@mui/system/styled';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import ProductImage from '../../assets/朋朋衛生紙商品圖.jpg'

export default function CheckOut() {

    const { checkOutContent, setCheckOutContent } = useContext(CartContext)

    const removeFromCheckOutContent=(product:ProductInfomationCount)=>{
        setCheckOutContent((prev:ProductInfomationCount[])=>{
            let newList=prev.filter(ele=>{
                if(ele.productId===product.productId && ele.selectSize===product.selectSize){
                    return false
                }

                return true
            })

            return newList
        })
    }

    return (
        <Container sx={{ border: "0px solid" }} maxWidth='xl'>
            <Grid container columns={8} sx={{ border: "0px solid" }} spacing={3}>
                <Grid item xs={8} sx={{ mt: "15px" }}>
                    <Typography variant='h6' sx={{ fontWeight: "bold" }}>結帳</Typography>



                </Grid>

                <Grid item xs={8} sx={{ mt: "15px" }}>
                    <Typography variant='body1' sx={{ fontWeight: "bold" }}>訂單商品內容</Typography>

                    <TableContainer component={Paper} sx={{ mt: "15px", maxHeight: "480px", border: "1px solid #d9d9d9", boxShadow: 'none' }}>
                        <Table stickyHeader size="small">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{ width: "50%" }}>
                                        <Typography variant='body2' sx={{ fontWeight: "bold" }}>商品</Typography>

                                    </StyledTableCell>
                                    <StyledTableCell align='center'>
                                        <Typography variant='body2' sx={{ fontWeight: "bold" }}>價格</Typography>
                                    </StyledTableCell>
                                    <StyledTableCell align='center'>
                                        <Typography variant='body2' sx={{ fontWeight: "bold" }}>數量</Typography>
                                    </StyledTableCell>
                                    <StyledTableCell align='center'>
                                        <Typography variant='body2' sx={{ fontWeight: "bold" }}>總計</Typography>
                                    </StyledTableCell>
                                    <StyledTableCell align='center'></StyledTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {checkOutContent.map((item:ProductInfomationCount, index:number) =>
                                (
                                    <TableRow key={index}>
                                        <TableCell style={{ width: "50%" }} >
                                            <Stack spacing={"20px"} direction={"row"} alignItems="center">
                                                <Box sx={{ my: "5px" }}>
                                                    <img src={ProductImage} style={{ width: "100px", height: "100px", padding: 0, margin: 0 }} />
                                                </Box>
                                                <Stack spacing={"2px"}>
                                                    <Typography >
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant='caption'>
                                                        規格 : {item.selectSize}
                                                    </Typography>
                                                </Stack>


                                            </Stack>

                                        </TableCell>
                                        <TableCell align='center'>${item.price}</TableCell>
                                        <TableCell align='center'>
                                            {item.count}
                                        </TableCell>
                                        <TableCell align='center'>${item.price*item.count}</TableCell>
                                        <TableCell sx={{ border: "0px solid" }} align='center'>
                                            <Stack sx={{ border: "0px solid" }} alignItems="center">
                                                <IconButton onClick={()=>{removeFromCheckOutContent(item)}}>
                                                    <DeleteOutlineOutlinedIcon />
                                                </IconButton>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>

                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>

                <Grid item xs={8} sx={{ mt: "15px" }}>
                    <Typography variant='body1' sx={{ fontWeight: "bold" }}>商品運送方式</Typography>

                    <Paper sx={{ mt: "15px", boxShadow: "none", border: "1px solid #d9d9d9" }}>

                        <Grid container columns={8} sx={{ border: "0px solid red" }}>
                            <Grid item xs={8} >
                                <FormControl sx={{ border: "0px solid red", width: "100%" }}>
                                    <RadioGroup sx={{ mx: "0px", my: "0px", border: "0px solid #d9d9d9" }}>
                                        <FormControlLabel sx={{ backgroundColor: "#d9d9d9", mx: "0px", my: "0px", border: "1px solid #d9d9d9" }} value={"7-11"} control={<Radio sx={{ color: "#D9D9D9" }} />} label="7-11" />
                                        <FormControlLabel sx={{ mx: "0px", my: "0px", border: "1px solid #d9d9d9" }} value={"全家"} control={<Radio sx={{ color: "#D9D9D9" }} />} label="全家" />

                                    </RadioGroup>
                                </FormControl>

                            </Grid>
                        </Grid>





                    </Paper>

                    <Stack direction={"row"} sx={{ my: "5px" }}>
                        <Button variant='contained' sx={{ backgroundColor: "#EFB878", color: "black", "&:hover": { backgroundColor: "#EFB878" } }}>選擇門市</Button>
                    </Stack>

                    <Stack spacing={"5px"} sx={{ mt: "15px" }}>
                        <Stack direction={"row"} spacing={"15px"}>
                            <Typography variant='body2' >門市名稱:</Typography>

                            <Typography variant='body2' >雅典</Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={"15px"}>
                            <Typography variant='body2' >門市地址:</Typography>

                            <Typography variant='body2' >台中市南區三民西路377號西川一路1號</Typography>
                        </Stack>

                    </Stack>


                </Grid>
                <Grid item xs={8} sx={{ mt: "15px" }}>
                    <Typography variant='body1' sx={{ fontWeight: "bold" }}>付款方式</Typography>

                    <Paper sx={{ mt: "15px", boxShadow: "none", border: "1px solid #d9d9d9" }}>

                        <Grid container columns={8} sx={{ border: "0px solid red" }}>
                            <Grid item xs={8} >
                                <FormControl sx={{ width: "100%" }}>
                                    <RadioGroup sx={{ mx: "0px", my: "0px", border: "0px solid #d9d9d9" }}>
                                        <FormControlLabel sx={{ backgroundColor: "#d9d9d9", mx: "0px", my: "0px", border: "1px solid #d9d9d9" }} value={"銀行匯款"} control={<Radio disabled checked sx={{ color: "#D9D9D9" }} />} label="銀行匯款" />


                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>




                    </Paper>

                </Grid>

                <Grid item xs={8} sx={{ mt: "15px" }}>
                    <Typography variant='body1' sx={{ fontWeight: "bold" }}>訂購人資訊</Typography>

                    <Paper sx={{ mt: "15px", boxShadow: "none", border: "1px solid #d9d9d9" }}>

                        <Stack sx={{ m: "30px" }} direction={"row"} spacing={"10px"} alignItems={"center"}>
                            <Typography sx={{ mr: "10px", minWidth: "30px" }} variant='caption' >姓名</Typography>
                            <TextField placeholder='不得包含特殊符號 / $ . @ & # @...' inputProps={{ sx: { height: "15px" } }} sx={{ marginTop: "10px" }} size='small' fullWidth />
                        </Stack>
                        <Stack sx={{ m: "30px" }} direction={"row"} spacing={"10px"} alignItems={"center"}>
                            <Typography sx={{ mr: "10px", minWidth: "30px" }} variant='caption' >電話</Typography>
                            <TextField placeholder='ex: 09xxxxxxxx' inputProps={{ sx: { height: "15px" } }} sx={{ marginTop: "10px" }} size='small' fullWidth />
                        </Stack>
                        <Stack sx={{ m: "30px" }} direction={"row"} spacing={"10px"} alignItems={"center"}>
                            <Typography sx={{ mr: "10px", minWidth: "30px" }} variant='caption' >信箱</Typography>
                            <TextField placeholder='ex: asbc@gmail.com' inputProps={{ sx: { height: "15px" } }} sx={{ my: "10px" }} size='small' fullWidth />
                        </Stack>


                    </Paper>

                </Grid>
                <Grid item xs={8} sx={{ mt: "15px" }}>
                    <Typography variant='body1' sx={{ fontWeight: "bold" }}>收件人資訊</Typography>

                    <Paper sx={{ mt: "15px", boxShadow: "none", border: "1px solid #d9d9d9" }}>
                        <Stack sx={{ m: "30px" }} direction={"row"} spacing={"10px"} alignItems={"center"}>
                            <FormControlLabel control={<Checkbox />} label="同訂購人資訊" />
                        </Stack>

                        <Stack sx={{ m: "30px" }} direction={"row"} spacing={"10px"} alignItems={"center"}>
                            <Typography sx={{ mr: "10px", minWidth: "30px" }} variant='caption' >姓名</Typography>
                            <TextField placeholder='不得包含特殊符號 / $ . @ & # @...' inputProps={{ sx: { height: "15px" } }} sx={{ marginTop: "10px" }} size='small' fullWidth />
                        </Stack>
                        <Stack sx={{ m: "30px" }} direction={"row"} spacing={"10px"} alignItems={"center"}>
                            <Typography sx={{ mr: "10px", minWidth: "30px" }} variant='caption' >電話</Typography>
                            <TextField placeholder='ex: 09xxxxxxxx' inputProps={{ sx: { height: "15px" } }} sx={{ marginTop: "10px" }} size='small' fullWidth />
                        </Stack>
                        <Stack sx={{ m: "30px" }} direction={"row"} spacing={"10px"} alignItems={"center"}>
                            <Typography sx={{ mr: "10px", minWidth: "30px" }} variant='caption' >信箱</Typography>
                            <TextField placeholder='ex: asbc@gmail.com' inputProps={{ sx: { height: "15px" } }} sx={{ my: "10px" }} size='small' fullWidth />
                        </Stack>


                    </Paper>

                </Grid>

                <Grid item xs={8} sx={{ mt: "15px" }}>
                    <Typography variant='body1' sx={{ fontWeight: "bold" }}>訂單金額</Typography>

                    <Grid item xs={6}></Grid>
                    <Grid item xs={2}>
                        
                    </Grid>
                </Grid>

                <Grid item xs={8} sx={{ mt: "15px" }}>
                    <Typography variant='body1' sx={{ fontWeight: "bold" }}>最後確認</Typography>

                    <Paper sx={{ mt: "15px", boxShadow: "none", border: "1px solid #d9d9d9" }}>

                        <Grid container columns={12} sx={{ m: "30px" }} spacing={"30px"}>
                            <Grid item xs={2} >
                                <Typography sx={{ minWidth: "30px" }}  >寄送方式</Typography>
                            </Grid>
                            <Grid item xs={10} >
                                <Typography sx={{ minWidth: "30px" }}  >7-11取貨</Typography>
                            </Grid>
                            <Grid item xs={2} >
                                <Typography sx={{ minWidth: "30px" }}  >付款方式</Typography>
                            </Grid>
                            <Grid item xs={10} >
                                <Typography sx={{ minWidth: "30px" }}  >銀行匯款</Typography>
                            </Grid>
                            <Grid item xs={2} >
                                <Typography sx={{ minWidth: "30px" }}  >收件人</Typography>
                            </Grid>
                            <Grid item xs={10} >
                                <Typography sx={{ minWidth: "30px" }}  >王大明</Typography>
                            </Grid>
                            <Grid item xs={2} >
                                <Typography sx={{ minWidth: "30px" }}  >連絡電話</Typography>
                            </Grid>
                            <Grid item xs={10} >
                                <Typography sx={{ minWidth: "30px" }}  >0945864315</Typography>

                            </Grid>
                            <Grid item xs={2} >
                                <Typography sx={{ minWidth: "30px" }}  >信箱</Typography>
                            </Grid>
                            <Grid item xs={10} >
                                <Typography sx={{ minWidth: "30px" }}  >Laopigu@gmail.com</Typography>
                            </Grid>
                            <Grid item xs={2} >
                                <Typography sx={{ minWidth: "30px" }}  >取件地址</Typography>
                            </Grid>
                            <Grid item xs={10} >
                                <Typography sx={{ minWidth: "30px" }}  >雅典門市-台中市南區三民西路377號西川一路1號</Typography>
                            </Grid>
                            <Grid item xs={2} >
                                <Typography sx={{ minWidth: "30px" }}  >總付款金額</Typography>
                            </Grid>
                            <Grid item xs={10} >
                                <Typography sx={{ minWidth: "30px",color:"red" }}  >$190</Typography>
                            </Grid>

                        </Grid>



                    </Paper>

                </Grid>
                <Grid item xs={8} sx={{ mt: "15px" }}>
                    <Typography variant='body1' sx={{ fontWeight: "bold" }}>下單須知</Typography>

                    <Paper sx={{ mt: "15px", boxShadow: "none", border: "1px solid #d9d9d9" }}>
                        <Typography sx={{ m: "30px" }}>
                            購買後5天內須要付款，未付款視為取消訂單，付款後會儘快出貨，商品物流情況詳情請在訂單查詢頁面追蹤
                        </Typography>

                    </Paper>

                </Grid>
                <Grid item xs={8} sx={{ mt: "15px" }}>
                    <Stack direction={"row"} justifyContent="end">
                        <Button variant='contained'>送出訂單</Button>
                    </Stack>

                </Grid>
            </Grid>


        </Container>

    )
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#d9d9d9",
    }

}));

const ItemWrapper = styled(Box)({
    paddingTop: "5px",
    paddingLeft: "30px",
    paddingRight: "30px"
})


interface ProductData {
    name: string;
    price: number;
}

const fakeData: ProductData = {
    name: "好男人需要時我都在衛生紙(10入)",
    price: 100
}

const fakeDataList: () => ProductData[] = () => {
    let list: ProductData[] = []
    for (let index = 0; index < 5; index++) {

        list.push(fakeData)

    }
    return list
}