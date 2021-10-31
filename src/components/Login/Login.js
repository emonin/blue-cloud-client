import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import {
    Link,
    useLocation,
    useHistory
} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./login.css"

const Login = () => {
    const { signInWithGoogle, signInWithEmailPass, setError, error, handleEmail, handlePassword, password, errorCode, setUser, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInWithGoogle()
            .then((result) => {
                history.push(redirect_url)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };
    const handleLogin = (e) => {
        e.preventDefault();
        if (!password) {
            setError('Please Input Valid Password.')
            return;
        }
        if (errorCode === 'auth/wrong-password') {
            setError('Wrong password.')
            return;
        }
        signInWithEmailPass()
            .then(result => {
                setUser(result.user);
                setError('');
                history.push(redirect_url)
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message);
            })
    };
    return (
        <div>
            <div className="container shadow rounded mt-5 bg-white">
                <p className="text-danger">{error}</p>
                <Row xs={1} md={2}>
                    <Col className="p-5 main-section">
                        <Form>
                            <h2 className="my-3 fw-bolder text-primary text-center">Welcome Back</h2>
                            <p className="mb-3 fw-bolder text-black text-center">Login to Continue</p>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><i class="fas fa-at"></i> Email address</Form.Label>
                                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label><i class="fas fa-lock"></i> Password</Form.Label>
                                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={handleLogin} className="w-100 fw-bolder mb-4">
                                Login
                            </Button>
                            <p>Don't have account?<Link to="/register" className="text-decoration-none text-primary"> Create a new account</Link></p>
                        </Form>
                        <div className="d-flex align-items-center justify-content-center border bg-white rounded shadow fw-bolder p-3" onClick={handleGoogleLogin}>
                            <img src="https://i.ibb.co/1n191Qh/google.png" alt="" className="me-2" />Google Login
                        </div>
                    </Col>
                    <Col>
                        <img className="w-100 img-fluid" src="https://i.ibb.co/1LNYggZ/login.png" alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Login;