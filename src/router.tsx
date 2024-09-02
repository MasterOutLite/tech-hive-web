import React from "react";
import {createBrowserRouter, Outlet} from "react-router-dom";

import Main from "./layout";
import HomePage from "page/HomePage";
import App from "./App";


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
      // {
      //   path: AppRoutes.Category,
      //   element: <CategoryPage/>,
      // },
      // {
      //   path: AppRoutes.Basket,
      //   element: <BasketPage/>,
      // },
      // {
      //   path: AppRoutes.Item + '/:id',
      //   element: <ItemPage/>,
      // }
    ]
  },
]);

export default router;
