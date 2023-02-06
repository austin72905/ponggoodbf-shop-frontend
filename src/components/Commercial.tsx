import React, { useState, useRef, useEffect } from 'react'
import Box from '@mui/material/Box';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import IconButton from '@mui/material/IconButton';

import Banner1 from '../assets/草寫3.jpg'
import Banner2 from '../assets/暖男專屬優惠1.jpg'
import Banner3 from '../assets/熱銷推薦2.jpg'
import { Stack, Typography } from '@mui/material';
import { width } from '@mui/system';

export default function Commercial() {

  //定時器，目的是離開組件時清除
  const timerRef = useRef<NodeJS.Timeout[]>()

  // 輪播圖定時器
  let bannerTimer = useRef<NodeJS.Timer>()

  useEffect(() => {
    return () => {

      timerRef.current?.forEach(ele => {
        clearTimeout(ele)
      })

    }
  }, [])


  useEffect(() => {

    bannerTimer.current = setInterval(() => {
      handleImageIndexPlus()
    }, 5000)

    //離開組件時做的事
    return ()=>{
      clearInterval(bannerTimer.current)
    }


  }, [])


  const restartBannerTimer = () => {
    console.log("mouseLeave")
    bannerTimer.current = setInterval(() => {
      handleImageIndexPlus()
    }, 5000)

  }

  const resetBannerTimer = () => {
    console.log("mouseEenter")
    clearInterval(bannerTimer.current)
  }


  //判斷是否到最後一張
  const ref = useRef<HTMLHtmlElement>()

  //紀錄當前在imgList的索引
  const currentRef = useRef(1)

  //輪播時位移的距離 (一張圖片的長度)
  const transformDistance = 872

  //紀錄實際播到第幾張
  const [showImgIndex, setShowImgIndex] = useState<number>(0)

  const handleImageIndexPlus = () => {

    let s: CSSStyleDeclaration | undefined = ref.current?.style
    if (s) {
      const distance = (currentRef.current + 1) * transformDistance
      s.transform = `translateX(-${distance}px)`
      s.transition = "0.5s" //應該是這個跑完就會去backToFirst這個涵式了

      currentRef.current++
      if (currentRef.current > bannerList.length + 1) {

        //回到index = 1 的位置
        currentRef.current = 1
      }

    }

    setShowImgIndex(i => {
      i = i + 1
      if (i === bannerList.length) {
        i = 0
      }
      return i
    })
  }

  const handleImageIndexMinus = () => {



    let s: CSSStyleDeclaration | undefined = ref.current?.style

    if (s) {
      const distance = (currentRef.current - 1) * transformDistance
      s.transform = `translateX(-${distance}px)`
      s.transition = "0.5s"
      currentRef.current--
      if (currentRef.current < 0) {
        //回到index = 4 的位置
        currentRef.current = bannerList.length
      }


    }

    setShowImgIndex(i => {
      i = i - 1
      if (i < 0) {
        i = bannerList.length - 1
      }
      return i
    })


  }

  //確認是否要回到頭部 or 尾部
  const backToFirst = () => {
    let s: CSSStyleDeclaration | undefined = ref.current?.style
    if (s) {

      //到尾部了，無痕跡的快速回到第一張
      if (currentRef.current + 1 > bannerList.length + 1) {

        currentRef.current = 1
        const distance = currentRef.current * transformDistance
        s.transitionDelay = ""
        s.transition = "0s"
        s.transform = `translateX(-${distance}px)`
        console.log("distance", distance)
        console.log("currentRef跑回原點囉", currentRef.current)

      } else if (currentRef.current - 1 < 0) {

        currentRef.current = bannerList.length
        const distance = currentRef.current * transformDistance
        s.transitionDelay = ""
        s.transition = "0s"
        s.transform = `translateX(-${distance}px)`

        console.log("currentRef跑回最後面囉", currentRef.current)

      }

    }
  }


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

  return (
    <Stack onMouseLeave={restartBannerTimer} onMouseEnter={resetBannerTimer} direction={"row"} sx={{ width: "100%", border: "0px solid", minHeight: "250px" }}>

      <Stack sx={{ zIndex: 99, mr: "-40px" }} justifyContent={"center"}>
        <IconButton onClick={throttleHandleImageIndexMinus.current}>
          <KeyboardArrowLeftIcon />
        </IconButton>
      </Stack>

      <Box sx={{ overflow: "hidden", width: "872px" }}>
        <Stack onTransitionEnd={backToFirst} ref={ref} direction={"row"} sx={{ width: "100%", justifyContent: "start", border: "0px solid", transform: `translateX(-872px)` }}>
          <img  src={bannerList[bannerList.length - 1]} />
          {
            bannerList.map((image, index) =>
            (
              <img key={index} src={image} />
            ))
          }
          <img src={bannerList[0]} />

        </Stack>
        <Stack justifyContent={"center"} direction={"row"} sx={{border:"0px solid",mt:"-25px"}}>
          <Stack direction={"row"} spacing={"10px"} sx={{zIndex:99999}}>
            {
              bannerList.map((i,index)=>
              (
                <Box key={index} sx={{backgroundColor:showImgIndex===index?"#d9d9d9":"#afafaf",width:"10px",height:"10px",borderRadius:"50%"}} />

              ))
            }
            
            
            </Stack>
        </Stack>
      </Box>
      <Stack sx={{ zIndex: 99, ml: "-40px" }} justifyContent={"center"}>
        <IconButton onClick={throttleHandleImageIndexPlus.current}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Stack>


    </Stack>
  )
}


const bannerList: string[] = [
  Banner1,
  Banner2,
  Banner3,

]