import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Home from "../components/Home"
import Login from "../components/Login"
import Register from '../components/Register'
import Travel from '../components/Travel'
import Blog from "../components/Blog";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,

        children:[
            
            {

            path:'/',
            element:<Home></Home>

            },
            {

                path: '/home',
                element: <Home></Home>

            },

            {
            path: '/login',
            element: <Login></Login>,

            },
            {
                path: '/register',
                element: <Register></Register>,

            },
            {
                path: '/travel',
                element: <Travel></Travel>,

            },
            {
                path: '/blog',
                element: <Blog></Blog>,

            },
        ]



    }
])


export default router