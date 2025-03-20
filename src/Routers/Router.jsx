import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Error from "../pages/Error";
import About from "../pages/About";
import Appointment from "../pages/Appointment";
import DoctorProfile from "../pages/DoctorProfile";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/appointment',
          element:<Appointment></Appointment>
        },
        {
          path:'/doctorProfile',
          element:<DoctorProfile></DoctorProfile>
        }
      ]
    },
  ]);