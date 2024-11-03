import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/user/Register/Register.jsx";
import Home from "../pages/user/Home/Home.jsx";
import Login from "../pages/user/Login/Login.jsx";
import CategoryDetails from "../pages/user/CategoryDetails/CategoryDetails.jsx";
import ProductsDetails from "../pages/user/Products/ProductsDetails.jsx";
import Sendcode from "../pages/user/sendcode/Sendcode.jsx";
import ForgotPassword from "../pages/user/forgotPassword/ForgotPassword.jsx";
import CreateOrder from "../pages/user/order/CreateOrder.jsx";
import Root from "../Root.jsx";
import {ProtectedRoiter,PublicRoiter} from './ProtectedRoiter.jsx'
import Cart from "../pages/user/cart/Cart.jsx";
import Myorder from "../pages/user/order/Myorder.jsx";
import Profile from "../pages/user/profile/Profile.jsx";
import Review from "../pages/user/review/Review.jsx";
import AllProduct from "../pages/user/Products/AllProduct.jsx";
const router = createBrowserRouter([
    {path:'/',element:<Root/>,
        children:[
            {path:'/',
               
                element:
                <ProtectedRoiter>
                <Home/>
                </ProtectedRoiter>
            },
            {path:'/Register',
                element:
                <PublicRoiter>
                <Register/>
                </PublicRoiter>
            },
            {path:'/Login',element:
                <PublicRoiter>
            <Login/>
            </PublicRoiter>
        },
        {path:'/CategoryDetails/:ID',element:
            <ProtectedRoiter>
        <CategoryDetails/>
        </ProtectedRoiter>
    },
    {path:'/ProductsDetails/:ProductsDetailsID',element:
        <ProtectedRoiter>
    <ProductsDetails/>
    </ProtectedRoiter>
}, 
{path:'/Cart',
               
    element:
    <ProtectedRoiter>
    <Cart/>
    </ProtectedRoiter>
},
{path:'/sendcode',
               
    element:
    <PublicRoiter>
    <Sendcode/>
    </PublicRoiter>
},{path:'/ForgotPassword',
               
    element:
    <PublicRoiter>
    <ForgotPassword/>
    </PublicRoiter>
},{path:'/CreateOrder',
               
    element:
    <ProtectedRoiter>
    <CreateOrder/>
    </ProtectedRoiter>
},{path:'/Myorder',
               
    element:
    <ProtectedRoiter>
    <Myorder/>
    </ProtectedRoiter>
},{path:'/Profile',
               
    element:
    <ProtectedRoiter>
    <Profile/>
    </ProtectedRoiter>
},{path:'/Review/:id',            
    element:
    <ProtectedRoiter>
    <Review/>
    </ProtectedRoiter>
},{path:'/allproducts',            
    element:
    <ProtectedRoiter>
    <AllProduct/>
    </ProtectedRoiter>
},
        ]

    }
    
]);
export default router;
