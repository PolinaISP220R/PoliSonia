import React from "react";
import { Outlet, useRoutes } from "react-router-dom"
import NotFound from "./NotFound"

import Home from "./Home";
import Users from "./users";
import User from "./User";



export default function Routes() {

    const routes = useRoutes([

        {
            path:'/',
            element:<Home/>
        },
        {
            // /users
            path:'users',
            element: < >
                Пользователи:
            {/*Тег для шаблона под все дочерние элементы*/}
            <Outlet/>
            </>,
            children: [
                {
                    // /users
                    path: '',
                    element: <Users/>
                },
                {
                    // /users/1
                    path: ':id',
                    element: <User/>
                }
            ]
        },
        {
            path:'todolist',
            element:<>todolist</>
        },
        {
            path:'group',
            element:<>group</>
        },
        {
            path:'*',
            element:<NotFound/>
        },
    ])
    return routes;
}