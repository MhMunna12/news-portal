/* eslint-disable no-unused-vars */
import {
    Navigate,
    createBrowserRouter,

} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Shared/Terms/Terms";
const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: "/login",
                element: <Login></Login>
            }, {
                path: "/register",
                element: <Register></Register>
            }
            ,
            {
                path: "/terms",
                element: <Terms></Terms>
            }
        ]
    },

    {
        path: 'category',
        element: <Layout></Layout>,
        children: [
            // {
            //     path: 'category',
            //     element: <Category></Category>,
            //     loader: () => fetch('http://localhost:5000/news')
            // },
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
            ,
        ]
    }, {

        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);
export default router;
