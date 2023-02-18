import React,{createContext} from 'react'
import { ProductInfomation } from '../pages/product/Product'

import { ProductInfomationCount } from '../pages/cart/Cart'

const CartContext=createContext<{
    cartContent:ProductInfomationCount[],
    setCartContent: React.Dispatch<React.SetStateAction<ProductInfomationCount[]>>,
    addToCart: (product: ProductInfomationCount) => void,
    favoriteContent:ProductInfomation[],
    addToCollectionList: (product: ProductInfomation) => void,
    removeFromCollectionList: (productId: number) => void,
    checkOutContent: ProductInfomationCount[],
    setCheckOutContent: React.Dispatch<React.SetStateAction<ProductInfomationCount[]>>


}>({} as any)

export {CartContext}