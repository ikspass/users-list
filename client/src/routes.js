import {LOGIN_ROUTE, REGISTRATION_ROUTE, USERLIST_ROUTE } from "./utils/consts"
import Login from "./pages/Login";
import UserList from "./pages/UserList";

export const authRoutes = [
    
]

export const publicRoutes = [
    {
        path: USERLIST_ROUTE,
        Component: UserList
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Login
    }
]