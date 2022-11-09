import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../pages/Blogs/Blogs";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import Services from "../../pages/Services/Services";
import ServiceSingle from "../../pages/ServiceSingle/ServiceSingle";
import Header from "../../pages/Shared/Header/Header";
import Signup from "../../pages/Signup/Signup";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/services',
                loader:()=>fetch('http://localhost:5000/services'),
                element:<Services></Services>
            },
            {
                path:'/services/:id',
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
                element:<ServiceSingle></ServiceSingle>
            },
            {
                path:'/add-service'
            },
            {
                path:'/my-reviews',
                element:<MyReviews></MyReviews>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'*',
                element:<h1 className="text-5xl pt-32 text-center">404 Error. Page not found. Please check Nav Menu Bar</h1>
            }
        ],
        errorElement:<>
            <Header></Header>
            <h1 className="text-5xl pt-32 text-center">Internet issue or Something wrong</h1>
        </>
    }
])
