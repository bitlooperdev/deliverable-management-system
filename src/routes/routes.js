import { createBrowserRouter } from "react-router-dom";

const allRoutes=createBrowserRouter([{
    path:'/',element:<h1>Home</h1>,
    errorElement:<h1>Page Not Found</h1>
},{
    path:'/about',element:<h1>About</h1>,
    errorElement:<h1>Page Not Found</h1>
},{
path:'/login',element:<h1>Login</h1>,
errorElement:<h1>Page Not Found</h1>    
},{
    path:'/contact',element:<h1>Contact</h1>,
}])