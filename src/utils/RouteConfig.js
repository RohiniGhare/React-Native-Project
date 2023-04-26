import React from 'react'
import { useRoutes } from 'react-router-dom';
import Admin from '../components/Admin';
import ApartmentDetails from '../components/ApartmentDetails';
import Apartments from '../components/Apartments';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import PageNotFound from '../components/PageNotFound';
import Registration from '../components/Registration';
import ProtectedRoute from './ProtectedRoute';
import Logout from '../components/Logout';

export default function RouteConfig() {
  let data={
    id:0
  };

  let routes = useRoutes([
    {path:'/', element:<Login/>},
    {path:'/login', element:<Login/>},
    {path:'/register', element:<Registration/>},
    {path:'/admin', element:<Admin/>},
    {path:'/dashboard', element:<Dashboard/>},
    {path:'/apartment', element:(
      <ProtectedRoute feed={data}>
        <ApartmentDetails/>
      </ProtectedRoute>
    )},
    {path:'/addApartment', element:<Apartments/>},
    {path:'/logout', element:<Logout/>},
    {path:'*', element:<PageNotFound/>}
  ])

  return routes;
}
