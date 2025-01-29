import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { Context } from "../index";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useNavigate } from 'react-router-dom';
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
        navigate(LOGIN_ROUTE);
    }

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                {user.isAuth ?
                    <Nav className="ms-auto">
                        <Button onClick={() => logOut()}>Log Out</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto">
                        <Button onClick={() => navigate(LOGIN_ROUTE)}>Sign In</Button>
                        <Button onClick={() => navigate(REGISTRATION_ROUTE)}>Sign Up</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar;