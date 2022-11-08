import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../pages/Blogs/Blogs";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Services/Services";

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
                path:'/blogs',
                element:<Blogs></Blogs>
            }
        ]
    }
])
