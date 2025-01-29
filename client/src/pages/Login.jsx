import { React, useState, useContext } from 'react';
import { Container, Form, Button, Row } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, USERLIST_ROUTE } from '../utils/consts';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { registration, login } from '../http/userAPI';
import { Context } from '../index';

const Login = () => {
    const { user } = useContext(Context)
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleCheckboxChange = () => {
        setShowPassword(prev => !prev);
    };
    
    const confirm = async () => {
        try {
            let data;
            if(isLogin){
                data = await login(email, password);
            }
            else{
                data = await registration(name, email, password);
            }
            user.setUser(user);
            user.setIsAuth(true);
            navigate(USERLIST_ROUTE)
        } catch (error) {
            alert(error.response.data.message)
        }        
    }

    return (
        <Container className="d-flex flex-column align-items-center" style={{marginTop: '100px'}}>
            <Form className='d-flex flex-column gap-3' style={{width: '400px'}}> 
                <h2 className="align-self-start">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
                { !isLogin && <Form.Control className="form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/> }
                <Form.Control className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <Form.Control className="form-control" placeholder="Password" type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)}/>
                <div className="d-flex align-items-center justify-content-end" style={{height: "min-content"}}>
                    <input type="checkbox" checked={showPassword} onChange={handleCheckboxChange} id="show-password"/>
                    <label htmlFor="show-password" className="mb-0 ms-2" style={{ cursor: "pointer", userSelect: 'none'}}> Show password </label>
                </div>
                <Row className="d-flex justify-content-between align-items-start">
                    {isLogin ? 
                        <NavLink style={{width: 'fit-content'}} to={REGISTRATION_ROUTE}>Don't have an account yet?</NavLink>    
                        :
                        <NavLink style={{width: 'fit-content'}} to={LOGIN_ROUTE}>Do you already have an account?</NavLink>    
                    }
                    <Button onClick={confirm} className="btn-primary col-md-3 flex-shrink-0">Confirm</Button>
                </Row>
            </Form>
        </Container>
    )
}

export default Login;