
import MainPage from '../pages/main-page/MainPage'
import MyAccount from '../pages/my-account/MyAccount'
import Purchase from '../pages/purchase/Purchase'
import CollectionList from '../pages/collection-list/CollectionList'
import ModifyPassword from '../pages/modify-password/ModifyPassword'
import Address from '../pages/address/Address'

export interface RouteInfomation {
    title: string;
    path: string;
    element?:JSX.Element;

}

const routeList: RouteInfomation[] = [
    {
        title:"新品上市",
        path:"/new-arrival",

    },
    {
        title:"全部商品",
        path:"/all-products",

    },
    {
        title:"生活小物",
        path:"/daily-products",

    },
    {
        title:"配件",
        path:"/accessories",

    },
    {
        title:"文具",
        path:"/stationery",

    },
    {
        title:"精選商品",
        path:"/select-products",

    },
    {
        title:"本月優惠",
        path:"/limit-time-offer",

    },
    {
        title:"粉絲專屬優惠",
        path:"/discount-member",

    },
    
]

const routeAccountList: RouteInfomation[] = [
    {
        title:"我的帳戶",
        path:"/user/account",
        element:<MyAccount/>
    },
    {
        title:"訂單查詢",
        path:"/user/purchase/*",
        element:<Purchase/>
    },
    {
        title:"願望清單",
        path:"/user/collection-list",
        element:<CollectionList/>
    },
    {
        title:"更改密碼",
        path:"/user/modify-password",
        element:<ModifyPassword/>
    },
    {
        title:"常用地址",
        path:"/user/addressed",
        element:<Address/>
    },
]



export { routeList, routeAccountList }