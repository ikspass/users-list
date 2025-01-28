import ToolBar from './components/ToolBar';
import NavBar from './components/NavBar';
import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { Context } from './index';
import { observer } from 'mobx-react-lite'
import { check } from "./http/userAPI"

const App = observer( () => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally( () => setLoading(false))
    }, [])
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
})

export default App;
