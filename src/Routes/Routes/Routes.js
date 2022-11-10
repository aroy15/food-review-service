import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
import Blogs from "../../pages/Blogs/Blogs";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import Services from "../../pages/Services/Services";
import ServiceSingle from "../../pages/ServiceSingle/ServiceSingle";
import Header from "../../pages/Shared/Header/Header";
import Signup from "../../pages/Signup/Signup";
import UpdateReview from "../../pages/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path:'/add-service',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'/my-reviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path:'/my-reviews/:id',
                loader:({params})=>fetch(`http://localhost:5000/reviews/${params.id}`),
                element:<PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>
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
