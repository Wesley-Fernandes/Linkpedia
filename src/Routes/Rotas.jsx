import {createBrowserRouter} from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Admin from "../Pages/Admin"
import Create from "../Pages/Create"
import Error from "../Pages/Error"

import Private from "./Private"
 const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/admin",
    element: <Private><Admin/></Private>
  },
  {
    path: "/create",
    element: <Create/>
  },
  {
    path: "*",
    element: <Error/>
  }
 ])

export {router}
