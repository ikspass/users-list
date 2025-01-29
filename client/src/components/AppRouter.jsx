import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index'
import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router-dom';
import { LOGIN_ROUTE, USERLIST_ROUTE } from '../utils/consts';

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    console.log(user.isAuth)

    return (
        <Routes>
            <Route path="/" element={user.isAuth ? <Navigate to={USERLIST_ROUTE} /> : <Navigate to={LOGIN_ROUTE} />}/>

            {user.isAuth ? authRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))
            :
            publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
        </Routes>
    );
})

export default AppRouter;