import React from 'react'
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
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Commercial from '../../components/Commercial'

import ProductImage from '../../assets/朋朋衛生紙商品圖.jpg'

export default function MainPage({ path, title }: RouteInfomation) {

  return (
    <Container maxWidth='xl'>
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
            <IconButton>
              <GridViewOutlinedIcon />
            </IconButton>
            <IconButton>
              <ListAltOutlinedIcon />
            </IconButton>
          </Stack>



        </Grid>
        <Grid item xs={8}>
          <List >
            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
              <Card sx={{ display: "flex", width: "100%" }}>
                <CardMedia component="img" sx={{ width: "120px", height: "120px" }} image={ProductImage} alt="product infomation" />
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                  <CardContent sx={{ marginLeft: 2, marginRight: 2, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Typography>好男人需要時我都在衛生紙(10入)</Typography>
                    <Typography>NT$100</Typography>
                  </CardContent>
                  <CardActions sx={{ marginLeft: 2, marginRight: 2, marginBottom: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <IconButton><FavoriteIcon sx={{ color: "red" }} /></IconButton>
                    <Button variant="contained">加入購物車</Button>
                  </CardActions>
                </Box>

              </Card>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
              <Card sx={{ display: "flex", width: "100%" }}>
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
            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
              <Card sx={{ display: "flex", width: "100%", borderRight: "0px" }}>
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
          </List>
        </Grid>

      </Grid>
    </Container>

  )
}

