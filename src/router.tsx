import React from "react";
import {createBrowserRouter, Outlet} from "react-router-dom";

import Main from "./layout";
import HomePage from "page/HomePage";
import App from "./App";
import ItemPage from "./page/ItemPage";
import FilterPage from "./page/FilterPage";


export enum AppRoutes {
  Home = '/',
  Category = '/category',
  Basket = '/basket',
  Item = '/item'
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main> <Outlet/> </Main>,
    children: [
      {
        path: AppRoutes.Home,
        element: <HomePage/>,
      },
      {
        path: AppRoutes.Item + '/:id',
        element: <ItemPage/>,
      },
      {
        path: AppRoutes.Category,
        element: <FilterPage/>,
      },
      // {
      //   path: AppRoutes.Item + '/:id',
      //   element: <ItemPage/>,
      // }
    ]
  },
]);

export default router;
