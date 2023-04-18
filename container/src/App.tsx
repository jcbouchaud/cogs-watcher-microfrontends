import React, { Suspense } from 'react';
import ListingsApp from './pages/ListingsApp';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const AlertsApp = React.lazy(() => import('./pages/AlertsApp'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<div>Loading...</div>}><AlertsApp/></Suspense>,
  },
  {
    path: "/listings",
    element: <ListingsApp/>,
  }
]);


export const App = () => {
  return <RouterProvider router={router} />
};