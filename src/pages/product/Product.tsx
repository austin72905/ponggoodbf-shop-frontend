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

import { CartContext } from '../../contextStore/context'
import { ProductInfomationCount } from '../cart/Cart'
import React, { useState, useRef, useEffect, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import ProductImage from '../../assets/朋朋衛生紙商品圖.jpg'
import ProductImage1 from '../../assets/輪播圖1.jpg'
import ProductImage2 from '../../assets/輪播圖2.jpg'
import ProductImage3 from '../../assets/輪播圖3.jpg'

export default function Product() {

    const { addToCart } = useContext(CartContext)
    //定時器，目的是離開組件時清除
    const timerRef = useRef<NodeJS.Timeout[]>()

    const [itemCount, setItemCount] = useState<number>(1)

    const handleCountMinus = () => {
        setItemCount(i => {
            if (i - 1 < 0) {
                return 0
            }

            return i - 1
        })
    }

    const handleCountPlus = () => {
        setItemCount(i => {
            if (i + 1 > 10) {
                return 10
            }

            return i + 1
        })
    }

    useEffect(() => {
        return () => {

            timerRef.current?.forEach(ele => {
                clearTimeout(ele)
            })

        }
    }, [])

    //節流器試做
    // 幾秒內不管呼叫幾次，只會執行一次涵式
    const throttle = (func: (...args: any[]) => void, wait = 500) => {

        let isWait = false;

        return (...args: any[]) => {
            //console.log("isWait",isWait)
            //只有當 不是等待狀態時
            if (!isWait) {
                //才執行含式
                func(...args);
                isWait = true;
                const timer = setTimeout(() => {
                    isWait = false
                }, wait);
                timerRef.current?.push(timer)
            }
        }

    }

    const throttleHandleImageIndexPlus = useRef(throttle(() => handleImageIndexPlus()))
    const throttleHandleImageIndexMinus = useRef(throttle(() => handleImageIndexMinus()))

    //console.log(fakeProductInfomation)
    const { pathname } = useLocation()

    const productName = pathname.split('/')

    const [viewValue, setviewValue] = useState<string>("商品介紹")

    const handleView = (e: React.SyntheticEvent, newVal: string) => {
        setviewValue(newVal)
    }

    const [showImgIndex, setShowImgIndex] = useState<number>(0)

    const handleImageIndexPlus = () => {

        let s: CSSStyleDeclaration | undefined = ref.current?.style
        if (s) {
            const distance = (currentRef.current + 1) * transformDistance
            s.transform = `translateX(-${distance}%)`
            s.transition = "0.5s" //應該是這個跑完就會去backToFirst這個涵式了

            currentRef.current++
            if (currentRef.current > imgList.length + 1) {

                //回到index = 1 的位置
                currentRef.current = 1
            }

        }

        setShowImgIndex(i => {
            i = i + 1
            if (i === imgList.length) {
                i = 0
            }
            return i
        })
    }

    const handleImageIndexMinus = () => {



        let s: CSSStyleDeclaration | undefined = ref.current?.style

        if (s) {
            const distance = (currentRef.current - 1) * transformDistance
            s.transform = `translateX(-${distance}%)`
            s.transition = "0.5s"
            currentRef.current--
            if (currentRef.current < 0) {
                //回到index = 4 的位置
                currentRef.current = imgList.length
            }


        }

        setShowImgIndex(i => {
            i = i - 1
            if (i < 0) {
                i = imgList.length - 1
            }
            return i
        })


    }

    //確認是否要回到頭部 or 尾部
    const backToFirst = () => {
        let s: CSSStyleDeclaration | undefined = ref.current?.style
        if (s) {

            //到尾部了，無痕跡的快速回到第一張
            if (currentRef.current + 1 > imgList.length + 1) {

                currentRef.current = 1
                const distance = currentRef.current * transformDistance
                s.transitionDelay = ""
                s.transition = "0s"
                s.transform = `translateX(-${distance}%)`
                console.log("distance", distance)
                console.log("currentRef跑回原點囉", currentRef.current)

            } else if (currentRef.current - 1 < 0) {

                currentRef.current = imgList.length
                const distance = currentRef.current * transformDistance
                s.transitionDelay = ""
                s.transition = "0s"
                s.transform = `translateX(-${distance}%)`

                console.log("currentRef跑回最後面囉", currentRef.current)

            }

        }
    }

    //判斷是否到最後一張
    const ref = useRef<HTMLHtmlElement>()

    //紀錄當前在imgList的索引
    const currentRef = useRef(1)

    //輪播時位移的距離
    const transformDistance = 100 / (imgList.length + 2)
    //console.log("transformDistance",transformDistance)
    //用 ref 紀錄 ，不用用到 useState，因為數值的改變不牽扯到重新渲染
    // 而是直接透過 transition 做動畫

    // margin 設定為負，可以讓原物重疊 (MVP 這個是想最久的...)

    //onTransitionEnd 事件，可以當作到最後一張時，返回到頭部 

    //transitionDelay ，回到頭部時，比較不會卡卡的

    //倫波圖原理

    //  1. imgList的最後一張 2. 原本的imgList 3. imgList的第一張
    //  imgList[-1],imgList[0],imgList[1],imgList[2],imgList[3],imgList[0]
    //  index    0          1          2          3          4          5
    //                    初始

    const [productInfo,setProductInfo]=useState<ProductInfomationCount>({...fakeProductInfomation,count:1})
    const [selectSize,setSelectSize]=useState("")

    return (

        <Container maxWidth='xl' >
            <Grid container columns={8} spacing={3}>
                <Grid item xs={4} >

                    {/*產品圖片 */}
                    <Grid container columns={16} sx={{ minHeight: "400px" }}>
                        <Grid item sx={{ border: "0px solid", display: "flex", justifyContent: "center", alignItems: "center" }} xs={2}>
                            <IconButton onClick={throttleHandleImageIndexMinus.current}>
                                <KeyboardArrowLeftIcon />
                            </IconButton>

                        </Grid>
                        <Grid item sx={{ border: "0px solid", minHeight: "300px", display: "flex", flexDirection: "row", alignItems: "center",/*超出隱藏*/overflow: "hidden" }} xs={12}>
                            <Box onTransitionEnd={backToFirst} ref={ref} sx={{ marginRight: imgMargin.get(imgList.length), display: "flex", flexDirection: "row", justifyContent: "start", border: "1px solid", transform: `translateX(-${transformDistance}%)` }} >

                                <img src={imgList[imgList.length - 1]} style={{ width: "320px", height: "320px", padding: 0, margin: 0 }} />
                                {imgList.map((item, index) =>
                                (
                                    <img key={item} src={item} style={{ width: "320px", height: "320px", padding: 0, margin: 0 }} />
                                ))}
                                <img src={imgList[0]} style={{ width: "320px", height: "320px", padding: 0, margin: 0 }} />
                            </Box>

                        </Grid>
                        <Grid item sx={{ border: "0px solid", display: "flex", justifyContent: "center", alignItems: "center" }} xs={2}>
                            <IconButton onClick={throttleHandleImageIndexPlus.current}>
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
                    <Grid container columns={4} sx={{ border: "1px solid #d9d9d9", minHeight: "400px", borderRadius: "4px" }}>
                        <Grid item xs={4}>
                            <Typography variant='h5' sx={{ fontWeight: "bold", margin: "30px" }}>{productInfo.title}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack direction={"row"} alignItems={'center'} spacing={3} sx={{ mx: "30px", mb: "10px" }}>
                                <Typography variant='body2'>售價</Typography>
                                <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>${productInfo.price}</Typography>
                            </Stack>

                        </Grid>
                        <Grid item xs={4}>
                            <Stack direction={"row"} alignItems={'center'} spacing={3} sx={{ mx: "30px", mt: "10px", mb: "20px" }}>
                                <Typography variant='body2'>規格</Typography>
                                <Stack direction={"row"} spacing={1}>
                                    {
                                        productInfo.size
                                            ?
                                            productInfo.size.map((s, index) => (
                                                <Stack key={s} onClick={()=>{setSelectSize(s)}} alignItems={"center"} sx={{ border: s===selectSize?"1px solid #61D1BD":"1px solid #d9d9d9", width: "40px", p: 0.5, borderRadius: "4px", cursor: "pointer" }}>
                                                    <Typography >{s}</Typography>
                                                </Stack>
                                            ))
                                            :

                                            <Stack alignItems={"center"} sx={{ border: "1px solid #d9d9d9", width: "40px", p: 0.5, borderRadius: "4px" }}>
                                                <Typography sx={{ color: "#AFAFAF" }} variant='caption'>標準</Typography>
                                            </Stack>
                                    }

                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "end" }}>
                            <Stack direction={"row"} alignItems={'center'} spacing={3} sx={{mx:"30px"}}>
                                <Typography variant='body2'>數量</Typography>
                                {/*數量欄 */}
                                <Box sx={{ display: "flex", ml: "30px" }}>
                                    <RemoveIcon onClick={handleCountMinus} sx={{ "&:hover": { cursor: "pointer" }, color: "#AFAFAF", border: "solid 1px", height: "38px", width: "38px", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px" }} />
                                    <TextFieldWrapper value={itemCount} size='small' inputProps={{ style: { textAlign: "center" } }} ></TextFieldWrapper>
                                    <AddIcon onClick={handleCountPlus} sx={{ "&:hover": { cursor: "pointer" }, color: "#AFAFAF", border: "solid 1px", height: "38px", width: "38px", borderTopRightRadius: "4px", borderBottomRightRadius: "4px" }} />
                                </Box>
                            </Stack>


                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "end" }}>

                            <Stack direction={"row"} sx={{ m: "30px" }} spacing={"10px"}>
                                <Button variant="outlined" onClick={() => { addToCart({...productInfo,count:itemCount,selectSize:selectSize}) }}>加入購物車</Button>
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


                        <TabPanel value="商品介紹" sx={{ pl: 0 }}>
                            <Stack spacing={3}>
                                <Typography variant='h6' sx={{ fontWeight: "bold" }}>商品介紹</Typography>
                                <Typography >超質感暖男衛生紙，無論上廁所要擦屁股、感冒擤鼻涕、還是室友的鳥拉屎在地板上，只要你需要的時候，我都在。</Typography>
                            </Stack>
                        </TabPanel>


                        <TabPanel value="產品規格" sx={{ pl: 0 }}>
                            <Stack spacing={3}>
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

                        <TabPanel value="注意事項" sx={{ pl: 0 }}>
                            <Stack spacing={3}>
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
    productId: number;
    title: string;
    price: number;
    stock: number;
    image: string;
    size?: string[];
    selectSize?:string;
}



const imgMargin = new Map<number, number>(
    [
        [0, 0],
        [1, -100],
        [2, -100],
        [3, -100],
        [4, -200],
    ])


const imgList: string[] = [
    ProductImage,
    ProductImage1,
    ProductImage2,
    ProductImage3,

]

/*
        ProductImage1,
        ProductImage2,
        ProductImage3,
*/
const fakeProductInfomation: ProductInfomation =
{
    title: "好男人需要時我都在衛生紙(10入)",
    productId: 1,
    stock: 60,
    price: 100,
    image: ProductImage,
    size: ["S", "M", "L","XL"]
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