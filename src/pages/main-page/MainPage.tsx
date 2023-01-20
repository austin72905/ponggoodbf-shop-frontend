import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { RouteInfomation } from '../../routes/routes'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Commercial from '../../components/Commercial'

import ProductImage from '../../assets/朋朋衛生紙商品圖.jpg'

import Product, { ProductInfomation } from '../product/Product'

interface MainPageProps {
  title: string,
  viewValue: string,
  handleView: (e: React.SyntheticEvent, newVal: string) => void
  viewProduct:() => void
}


interface ViewProps{
  viewProduct:() => void
}

export default function MainPage({ path, title }: RouteInfomation) {


  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isGridView, setIsGridView] = useState<boolean>(false)

  const handleGridView = () => {
    setIsGridView(() => true)
  }

  const handleListView = () => {
    setIsGridView(() => false)
  }

  const [viewValue, setviewValue] = useState<string>("list")

  const handleView = (e: React.SyntheticEvent, newVal: string) => {
    setviewValue(newVal)
  }

  
  const viewProduct=()=>{
    navigate("/product")
  }


  return (
    <Container sx={{ border: "1px solid" }} maxWidth='xl'>

      <ProductListPage title={title} viewValue={viewValue} handleView={handleView} viewProduct={viewProduct}/>

    </Container>

  )
}

const CardWrapper = styled(Card)({
  boxShadow: "none"
})

const fakeProductInfomation: ProductInfomation =
{
  title: "好男人需要時我都在衛生紙(10入)",
  stock: 60,
  price: 100,
  image: ProductImage
}

const ProductListPage = ({ title, viewValue, handleView,viewProduct }: MainPageProps) => {
  return (
    <Grid container columns={8} sx={{ border: "0px solid" }} spacing={3}>
      <Grid item xs={8} lg={8} md={8}>
        <Commercial />
      </Grid>
      <Grid item xs={2}>
        <Typography variant='h6' sx={{ fontWeight: "bold" }}>{title}</Typography>

      </Grid>
      <Grid item xs={6} >
        <Stack direction='row' sx={{ justifyContent: "flex-end", display: "flex", alignItems: "center" }}>
          <FormControl sx={{ minWidth: "120px" }} size="small">
            <InputLabel id="select-sort-id" sx={{ letterSpacing: "5px" }}>排序</InputLabel>
            <Select labelId="select-sort-id" label="排序" sx={{ maxHeight: "35px" }}>
              <MenuItem >金額高-低</MenuItem>
              <MenuItem >金額低-高</MenuItem>
            </Select>
          </FormControl>
          <Tabs value={viewValue} onChange={handleView}  >
            <Tab value="grid" icon={<GridViewOutlinedIcon />} sx={{ minWidth: "50%", width: "40px" }}></Tab>
            <Tab value="list" icon={<ListAltOutlinedIcon />} sx={{ minWidth: "50%", width: "40px" }}></Tab>
          </Tabs>

        </Stack>



      </Grid>
      {/*主要商品內容 */}
      <Grid item xs={8} >
        {viewValue === "grid" ? <GridView viewProduct={viewProduct}/> : <ListView viewProduct={viewProduct}/>}

      </Grid>

    </Grid>
  )
}


const GridView = ({viewProduct}:ViewProps) => {
  return (
    <Grid container sx={{ border: "0px solid" }} columnSpacing={3} rowSpacing={3}>

      <Grid item xs={4} >
        <CardWrapper>
          <CardMedia component="img" sx={{ width: "100%", height: "280px" }} image={ProductImage} alt="product infomation" />
          <CardContent>
            <Typography sx={{ marginBottom: 2, fontWeight: "bold",'&:hover':{cursor:"pointer"} }} onClick={viewProduct}>好男人需要時我都在衛生紙(10入)</Typography>
            <Typography sx={{ marginTop: 2 }}>NT$100</Typography>
          </CardContent>
        </CardWrapper>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ boxShadow: "none" }}>
          <CardMedia component="img" sx={{ width: "100%", height: "280px" }} image={ProductImage} alt="product infomation" />
          <CardContent>
            <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>好男人需要時我都在衛生紙(10入)</Typography>
            <Typography sx={{ marginTop: 2 }}>NT$100</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ boxShadow: "none" }}>
          <CardMedia component="img" sx={{ width: "100%", height: "280px" }} image={ProductImage} alt="product infomation" />
          <CardContent>
            <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>好男人需要時我都在衛生紙(10入)</Typography>
            <Typography sx={{ marginTop: 2 }}>NT$100</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ boxShadow: "none" }}>
          <CardMedia component="img" sx={{ width: "100%", height: "280px" }} image={ProductImage} alt="product infomation" />
          <CardContent>
            <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>好男人需要時我都在衛生紙(10入)</Typography>
            <Typography sx={{ marginTop: 2 }}>NT$100</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ boxShadow: "none" }}>
          <CardMedia component="img" sx={{ width: "100%", height: "280px" }} image={ProductImage} alt="product infomation" />
          <CardContent>
            <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>好男人需要時我都在衛生紙(10入)</Typography>
            <Typography sx={{ marginTop: 2 }}>NT$100</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ boxShadow: "none" }}>
          <CardMedia component="img" sx={{ width: "100%", height: "280px" }} image={ProductImage} alt="product infomation" />
          <CardContent>
            <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>好男人需要時我都在衛生紙(10入)</Typography>
            <Typography sx={{ marginTop: 2 }}>NT$100</Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  )
}

const ListView = ({viewProduct}:ViewProps) => {
  return (
    <List >
      <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Card sx={{ display: "flex", width: "100%", boxShadow: "none" }}>
          <CardMedia component="img" sx={{ width: "120px", height: "120px" }} image={ProductImage} alt="product infomation" />
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <CardContent sx={{ marginLeft: 2, marginRight: 2, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Typography onClick={viewProduct} sx={{'&:hover':{cursor:"pointer"}}}>好男人需要時我都在衛生紙(10入)</Typography>
              <Typography>NT$100</Typography>
            </CardContent>
            <CardActions sx={{ marginLeft: 2, marginRight: 2, marginBottom: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end" }}>
              <IconButton><FavoriteIcon sx={{ color: "red" }} /></IconButton>
              <Button variant="contained">加入購物車</Button>
            </CardActions>
          </Box>

        </Card>
      </ListItem>
      <Divider />
      <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Card sx={{ display: "flex", width: "100%", boxShadow: "none" }}>
          <CardMedia component="img" sx={{ width: "120px", height: "120px" }} image={ProductImage} alt="product infomation" />
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <CardContent sx={{ marginLeft: 2, marginRight: 2, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Typography>好男人需要時我都在衛生紙(10入)</Typography>
              <Typography>NT.100</Typography>
            </CardContent>
            <CardActions sx={{ marginLeft: 2, marginRight: 2, marginBottom: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end" }}>
              <IconButton><FavoriteBorderIcon /></IconButton>
              <Button variant="contained">加入購物車</Button>

            </CardActions>
          </Box>

        </Card>
      </ListItem>
      <Divider />
      <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Card sx={{ display: "flex", width: "100%", borderRight: "0px", boxShadow: "none" }}>
          <CardMedia component="img" sx={{ width: "120px", height: "120px" }} image={ProductImage} alt="product infomation" />
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <CardContent sx={{ marginLeft: 2, marginRight: 2, display: "flex", flexDirection: "column", justifyContent: "space-between", borderRight: "0px" }}>
              <Typography>好男人需要時我都在衛生紙(10入)</Typography>
              <Typography>NT.100</Typography>
            </CardContent>
            <CardActions sx={{ marginLeft: 2, marginRight: 2, marginBottom: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end" }}>
              <IconButton><FavoriteBorderIcon /></IconButton>
              <Button variant="contained">加入購物車</Button>
            </CardActions>
          </Box>

        </Card>

      </ListItem>
      <Divider />
      <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Card sx={{ display: "flex", width: "100%", borderRight: "0px", boxShadow: "none" }}>
          <CardMedia component="img" sx={{ width: "120px", height: "120px" }} image={ProductImage} alt="product infomation" />
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <CardContent sx={{ marginLeft: 2, marginRight: 2, display: "flex", flexDirection: "column", justifyContent: "space-between", borderRight: "0px" }}>
              <Typography>好男人需要時我都在衛生紙(10入)</Typography>
              <Typography>NT.100</Typography>
            </CardContent>
            <CardActions sx={{ marginLeft: 2, marginRight: 2, marginBottom: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end" }}>
              <IconButton><FavoriteBorderIcon /></IconButton>
              <Button variant="contained">加入購物車</Button>
            </CardActions>
          </Box>

        </Card>
      </ListItem>
      <Divider />
    </List>
  )
}