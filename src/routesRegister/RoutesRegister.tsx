import { Route, Routes } from 'react-router-dom'

import { RouteInfomation } from '../routes/routes'
import MainPage from '../pages/main-page/MainPage'
import Product from '../pages/product/Product'

import {ProductInfomation} from '../pages/product/Product'

interface RouteProps {
    routeList: RouteInfomation[];
    routeAccountList: RouteInfomation[];
}


export default function RoutesRegister({ routeList,routeAccountList }: RouteProps) {
    return (
        <Routes>
            {
                routeList.map(route =>
                (
                    <Route
                        key={route.title}
                        path={route.path}
                        element={<MainPage title={route.title} path={route.path}/>}
                    />
                ))
            }

            {
                routeAccountList.map(route =>
                (
                    <Route
                        key={route.title}
                        path={route.path}
                        element={route.element}
                    />
                ))
            }

            <Route key="product" path='/product/*' element={<Product/>}/>
        </Routes>
    )
}