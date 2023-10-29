import { createBrowserRouter } from "react-router-dom";
import Layout from "../Common/Layout";
import HomeScreen from "../Pages/HomeScreen";
import Layout2 from "../Common/Layout2";
import Detailpage from "../detail/detailpage";


export const MainRouter = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [
        {
            index:true,
            element: <HomeScreen/>
        }
    ]
},
    {
        path: "/detail-page/:id",
    element: <Layout2/>,
    children: [
        {
            index:true,
            element: <Detailpage/>
        }
    ]
    }
])