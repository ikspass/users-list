import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { Context } from "../index";
import { LOGIN_ROUTE, USERLIST_ROUTE } from "../utils/consts";
import { useNavigate } from 'react-router-dom';
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setisAuth(false)
    }

    return (
        <Navbar bg="primary" data-bs-theme="dark" className="mb-100">
            <Container>
                {user.isAuth ?
                    <Nav className="ms-auto">
                        <Button onClick={() => logOut()}>Log Out</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto">
                        <Button onClick={() => navigate(LOGIN_ROUTE)}>Sign In</Button>
                        <Button onClick={() => navigate(LOGIN_ROUTE)}>Sign Up</Button>
                        <Button onClick={() => navigate(USERLIST_ROUTE)}>User List</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar;