import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../pages/Blogs/Blogs";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Services/Services";
import ServiceSingle from "../../pages/ServiceSingle/ServiceSingle";

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
                path:'/blogs',
                element:<Blogs></Blogs>
            }
        ]
    }
])
