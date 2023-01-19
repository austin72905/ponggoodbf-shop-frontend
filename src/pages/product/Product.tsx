import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import ProductImage from '../../assets/朋朋衛生紙商品圖.jpg'
export default function Product() {

    console.log(fakeProductInfomation)
    const { pathname } = useLocation()

    const productName = pathname.split('/')

    return (

        <Container maxWidth='xl' sx={{ border: "solid 0px" }}>
            <Grid container columns={8} sx={{ border: "1px solid" }} spacing={3}>
                <Grid item xs={4} sx={{ border: "1px solid" }}>圖片</Grid>
                <Grid item xs={4}>
                    <Grid container columns={4} sx={{ border: "1px solid", minHeight: "400px" }}>
                        <Grid item xs={4}>
                            <Typography variant='h5' sx={{ fontWeight: "bold", margin: "30px" }}>{fakeProductInfomation.title}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ fontWeight: "bold", margin: "30px" }}>
                                <Typography >定價</Typography>
                                <Typography sx={{ fontWeight: "bold" }}>NT${fakeProductInfomation.price}</Typography>
                            </Box>

                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "end" }}>
                            <Box sx={{ display: "flex", marginLeft: "30px" }}>
                                <RemoveIcon sx={{ ":hover": { cursor: "pointer" }, color: "#AFAFAF", border: "solid 1px", height: "38px", width: "38px", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px" }} />
                                <TextFieldWrapper size='small' inputProps={{ style: { textAlign: "center" } }} ></TextFieldWrapper>
                                <AddIcon sx={{ ":hover": { cursor: "pointer" }, color: "#AFAFAF", border: "solid 1px", height: "38px", width: "38px", borderTopRightRadius: "4px", borderBottomRightRadius: "4px" }} />
                            </Box>

                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "end" }}>
                            <Stack direction={"row"} sx={{ margin: "30px" }} spacing={"10px"}>
                                <Button variant="outlined">加入購物車</Button>
                                <Button variant="contained">直接購買</Button>
                            </Stack>

                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={8}>tab</Grid>
                <Grid item xs={8}>說明</Grid>
            </Grid>
        </Container>
    )
}

//目前只想到用這個方式，在props 裡傳遞物件， 除非想要title、price...一個屬性個別傳，才可以用在 props 型別用 ProductInfomation
export interface ProductInfo {
    productInfo?: ProductInfomation;
}

export interface ProductInfomation {
    title: string;
    price: number;
    stock: number;
    image: string;
}


const fakeProductInfomation: ProductInfomation =
{
    title: "好男人需要時我都在衛生紙(10入)",
    stock: 60,
    price: 100,
    image: ProductImage
}

const TextFieldWrapper=styled(TextField)(
{
    /*修改 focus 時外框的顏色  */
    "& .MuiOutlinedInput-root.Mui-focused": { 
        "& > fieldset": { 
            borderColor: "#AFAFAF" 
        } 
    },
    /*修改外框的弧度 */
    '& fieldset': { borderRadius: "0px" },
    maxWidth: "70px",

})