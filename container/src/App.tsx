import React, { Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const AlertsApp = React.lazy(() => import('./pages/AlertsApp'));
const AuthApp = React.lazy(() => import('./pages/AuthApp'));
const ListingsApp = React.lazy(() => import('./pages/ListingsApp'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<div>Loading...</div>}><AlertsApp/></Suspense>,
  },
  {
    path: "/listings",
    element: <ListingsApp/>,
  },
  {
    path: "/auth",
    element: <AuthApp/>,
  }
]);


export const App = () => {
  return <RouterProvider router={router} />
};