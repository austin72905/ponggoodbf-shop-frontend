import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import React, { useState,useRef,useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import ProductImage from '../../assets/朋朋衛生紙商品圖.jpg'
import ProductImage1 from '../../assets/輪播圖1.jpg'
import ProductImage2 from '../../assets/輪播圖2.jpg'
import ProductImage3 from '../../assets/輪播圖3.jpg'
export default function Product() {

    //console.log(fakeProductInfomation)
    const { pathname } = useLocation()

    const productName = pathname.split('/')

    const [viewValue, setviewValue] = useState<string>("商品介紹")

    const handleView = (e: React.SyntheticEvent, newVal: string) => {
        setviewValue(newVal)
    }

    const [showImgIndex, setShowImgIndex] = useState<number>(0)

    const handleImageIndexPlus = () => {

        

        let s:CSSStyleDeclaration|undefined =ref.current?.style
        //console.log("ref",ref.current?.style)
        if(s){
            console.log("currentIndex",currentIndex)


            if(currentIndex+1<imgList.length+2){
                const distance =(currentIndex+1)*16.66
                s.transform =`translateX(-${distance}%)`
                s.transition="0.5s"
            }
            
                       
        }
        
        setCurrentIndex(i => {
            i = i + 1
            console.log("+完1的i=",i)
            if (i === imgList.length+2) {
                i = 1
                console.log("+完1的i=",i)
            }
            
            return i
        })
        
        setShowImgIndex(i => {
            i = i + 1
            if (i === imgList.length) {
                i = 0
            }
            return i
        })
    }

    const handleImageIndexMinus = () => {


        
        let s:CSSStyleDeclaration|undefined =ref.current?.style
        //console.log("ref",ref.current?.style)
        if(s){
            console.log("currentIndex",currentIndex)



            const distance =(currentIndex-1)*16.66
            s.transform =`translateX(${distance}%)`
            s.transition="0.5s"

            //到頭部了，無痕跡的快速回到最後一張

            if (currentIndex-1 === 0){
                s.transform =`translateX(-100%)`
                s.transition="none"
                console.log("currentIndex跑回最後面囉",currentIndex)
            }
        }

        //他只是個紀錄其實不太重要
        setCurrentIndex(i => {
            i = i - 1
            if (i < 0) {
                i = imgList.length +1
            }
            return i
        })


        setShowImgIndex(i => {
            i = i - 1
            if (i < 0) {
                i = imgList.length - 1
            }
            return i
        })


    }

    const backToFirst=()=>{
        let s:CSSStyleDeclaration|undefined =ref.current?.style
        if(s){
            
            //到尾部了，無痕跡的快速回到第一張
            if (currentIndex+1 === imgList.length+2){
                s.transitionDelay="250ms"
                s.transition="0s"
                s.transform =`translateX(-16.66%)`
                
                console.log("currentIndex跑回原點囉",currentIndex)
            }
            
            //console.log("s",s.transform)
        }
    }

    //判斷是否到最後一張
    const [currentIndex,setCurrentIndex]=useState(1)

    const ref=useRef<HTMLInputElement>()


    return (

        <Container maxWidth='xl' sx={{ border: "solid 0px" }}>
            <Grid container columns={8} sx={{ border: "0px solid" }} spacing={3}>
                <Grid item xs={4} sx={{ border: "0px solid" }}>
                    <Grid container columns={16} sx={{ border: "0px solid", minHeight: "400px" }}>
                        <Grid item sx={{ border: "0px solid", display: "flex", justifyContent: "center", alignItems: "center" }} xs={2}>
                            <IconButton onClick={handleImageIndexMinus}>
                                <KeyboardArrowLeftIcon />
                            </IconButton>

                        </Grid>
                        <Grid item sx={{ border: "0px solid", minHeight: "300px", display: "flex", flexDirection: "row", alignItems: "center",/*超出隱藏*/overflow: "hidden" }} xs={12}>
                            <Box onTransitionEnd={backToFirst} ref={ref} sx={{ marginRight:-200,display: "flex", flexDirection: "row", justifyContent: "start", border: "1px solid",transform:"translateX(-16.66%)" }} >

                                <img  src={imgList[imgList.length-1]} style={{ width: "320px", height: "320px", padding: 0, margin: 0 }} />
                                {imgList.map((item,index)=>
                                    (
                                        <img  src={item} style={{ width: "320px", height: "320px", padding: 0, margin: 0 }} />
                                    ))}
                                <img  src={imgList[0]} style={{ width: "320px", height: "320px", padding: 0, margin: 0 }} />
                            </Box>

                        </Grid>
                        <Grid item sx={{ border: "0px solid", display: "flex", justifyContent: "center", alignItems: "center" }} xs={2}>
                            <IconButton onClick={handleImageIndexPlus}>
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        </Grid>
                        <Grid item sx={{ border: "0px solid", justifyContent: "center", display: "flex", flexDirection: "row" }} xs={16}>
                            <List sx={{ border: "0px solid", width: "400px", height: "52px", padding: 0, margin: 0, justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "row" }}>
                                {imgList.map((item, index) =>
                                (
                                    <ListItem key={item} sx={{ padding: 0, margin: 0, border: "0px solid", width: "60px" }} >
                                        <img src={item} style={{ width: "50px", height: "50px", padding: 0, margin: 0, border: showImgIndex === index ? "1px orange solid" : "none" }} />

                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container columns={4} sx={{ border: "0px solid", minHeight: "400px" }}>
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
                <Grid item xs={8}>
                    <TabContext value={viewValue}>
                        <TabList onChange={handleView} >
                            <Tab value="商品介紹" label="商品介紹" sx={{ border: "1px solid #AFAFAF", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px" }}></Tab>
                            <Tab value="產品規格" label="產品規格" sx={{ border: "1px solid #AFAFAF" }}></Tab>
                            <Tab value="注意事項" label="注意事項" sx={{ border: "1px solid #AFAFAF", borderTopRightRadius: "4px", borderBottomRightRadius: "4px" }}></Tab>
                        </TabList>
                        <TabPanel value="商品介紹" sx={{ paddingLeft: "0px" }}>
                            <Stack spacing={"20px"}>
                                <Typography variant='h6' sx={{ fontWeight: "bold" }}>商品介紹</Typography>
                                <Typography >超質感暖男衛生紙，無論上廁所要擦屁股、感冒擤鼻涕、還是室友的鳥拉屎在地板上，只要你需要的時候，我都在。</Typography>
                            </Stack>


                        </TabPanel>
                        <TabPanel value="產品規格" sx={{ paddingLeft: "0px" }}>
                            <Stack spacing={"20px"}>
                                <Typography variant='h6' sx={{ fontWeight: "bold" }}>產品規格</Typography>
                                <Typography>
                                    <ListWrapper>
                                        <li>好男友暖男衛生紙10包</li>
                                        <li>每包有若干衛生紙</li>
                                        <li>封口處易脫落，使用請小心</li>
                                        <li>產品背面印有粉絲專頁instgram</li>
                                    </ListWrapper>
                                </Typography>
                            </Stack>
                        </TabPanel>
                        <TabPanel value="注意事項" sx={{ paddingLeft: "0px" }}>
                            <Stack spacing={"20px"}>
                                <Typography variant='h6' sx={{ fontWeight: "bold" }}>注意事項</Typography>
                                <Typography >
                                    購買後5天內須要付款，未付款視為取消訂單，付款後會儘快出貨，商品物流情況詳情請在訂單查詢頁面追蹤
                                </Typography>
                            </Stack>
                        </TabPanel>
                    </TabContext>

                </Grid>

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

const imgList: string[] = [
    ProductImage,
    ProductImage1,
    ProductImage2,
    ProductImage3,

]


const fakeProductInfomation: ProductInfomation =
{
    title: "好男人需要時我都在衛生紙(10入)",
    stock: 60,
    price: 100,
    image: ProductImage
}

const TextFieldWrapper = styled(TextField)(
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


const ListWrapper = styled("ul")(
    {
        paddingLeft: "20px",
        margin: "0px"
    })