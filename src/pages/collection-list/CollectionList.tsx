import React,{useContext} from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';
import Button from '@mui/material/Button';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon  from '@mui/icons-material/Favorite';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';

import ProductImage from '../../assets/朋朋衛生紙商品圖.jpg'

import { ProductInfomation } from '../product/Product'

import { CartContext} from '../../contextStore/context'

export default function CollectionList() {

    const navigate = useNavigate();

    const {favoriteContent,addToCart,addToCollectionList,removeFromCollectionList} =useContext(CartContext)

    const viewProduct=()=>{
        navigate("/product")
    }


    var showList:ProductInfomation[]=[]

    for (let index = 0; index < 5; index++) {
        showList.push(fakeProductInfomation)
        
    }

    return (
        <Container sx={{ border: "0px solid" }} maxWidth='xl'>
            <Grid container columns={8} sx={{ border: "0px solid" }} spacing={3}>
                <Grid item xs={8} sx={{ mt: 2 }}>
                    <Typography variant='h6' sx={{ fontWeight: "bold" }}>願望清單</Typography>

                </Grid>
                <Grid item xs={8} sx={{ my: 0 }}>
                    <Stack direction={"row"} sx={{ justifyContent: "end", my: 0 }}>
                        <Paper sx={{ border: "1px solid #d9d9d9", boxShadow: "none", display: 'flex', alignItems: 'center', width: 350, height: 35 }}>
                            <IconButton type="button" sx={{ p: 1, width: 35, height: 35, borderRadius: "0px", '&:hover': { background: "white" } }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="查詢收藏清單中的品項"
                                inputProps={{ 'aria-label': '查詢收藏清單中的品項' }}
                            />
                        </Paper>
                    </Stack>

                </Grid>
                {/*收藏清單表 */}
                <Grid item xs={8} sx={{ my: "0px" }}>
                    <List>
                        {
                            favoriteContent.map((info:ProductInfomation,index:number)=>
                            (
                                <ListItem key={index} sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                    <Card sx={{ display: "flex", width: "100%", boxShadow: "none",border:"solid 1px #d9d9d9" }}>
                                        <CardMedia component="img" sx={{ width: "120px", height: "120px" }} image={info.image} alt="product infomation" />
                                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                            <CardContent sx={{ marginLeft: 2, marginRight: 2, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                                <Typography onClick={viewProduct}  sx={{ '&:hover': { cursor: "pointer" } }}>{info.title}</Typography>
                                                <Typography>NT${info.price}</Typography>
                                            </CardContent>
                                            <CardActions sx={{ marginLeft: 2, marginRight: 2, marginBottom: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end" }}>
                                                <IconButton onClick={()=>{removeFromCollectionList(info.productId)}}>
                                                    <DeleteIcon  />
                                                </IconButton>
                                                <Button onClick={()=>{addToCart({...info,count:1})}} variant="contained">加入購物車</Button>
                                            </CardActions>
                                        </Box>

                                    </Card>
                                </ListItem>
                            ))
                        }
                                             
                    </List>
                </Grid>
            </Grid>

        </Container>
    )
}


const fakeProductInfomation: ProductInfomation =
{
  title: "好男人需要時我都在衛生紙(10入)",
  productId:1,
  stock: 60,
  price: 100,
  image: ProductImage
}