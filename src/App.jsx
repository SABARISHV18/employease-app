import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Home from './components/Home';
import Employee from './components/Employee';
import Category from './components/Category';
import Profile from './components/Profile';
import CreateUser from './components/CreateUser';
import Updateuser from './components/Updateuser';
import Signup from './components/Signup';
import Login from './components/Login';
import AttendanceForm from './components/Attendance';
import Displaycategory from './components/Displaycategory';
import AttendanceHistory from './components/AttendanceHistory';

const router = createBrowserRouter([
  {
    path: '/',
    element:<DashBoard />,
    children:[
      {path:'',index:true,element:<Home />},
      {path:'category',element:<Displaycategory />},
      {path:'cat',element:<Category />},
      {path:'attendance',element:<AttendanceForm />},
      {path:'history/:employeeId', element:<AttendanceHistory />},
      {path:'employee',element:<Employee />},
      {path:'create',element:<CreateUser/>},
      {path:'update/:id',element:<Updateuser/>}
    ],
  },
  {
    path:'https://mathi-tech.vercel.app/login',
    element:<Login />
  },
  {
    path:'/register',
    element:<Signup />
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
