import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import {
    Link,
    useLocation,
    useHistory
} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { error, signInWithGoogle, signUpWithEmailPass, handleEmail, handlePassword, handleName, setError, password, setUserName, setUser, setErrorCode, setIsLoading } = useAuth();
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
    const handleRegistration = (e) => {
        e.preventDefault();
        if (!password) {
            setError('Please Input Valid Password.')
            return;
        }
        if (password.length < 6) {
            setError('Your Password Must be at Least 6 Characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Your Password Should Contain at Least 2 Uppercase');
            return;
        }
        signUpWithEmailPass()
            .then(result => {
                setUser(result.user);
                setError('');
                setUserName();
                history.push(redirect_url)
            })
            .catch(error => {
                setError(error.message);
                setErrorCode(error.code);
            })
    };
    return (
        <div className="container shadow rounded mt-5 bg-white">
            <p>{error}</p>
            <Row xs={1} md={2}>
                <Col>
                    <img className="w-100 img-fluid" src="https://i.ibb.co/qkWBMDW/signup.png" alt="" />
                </Col>
                <Col className="p-5 main-section">
                    <Form>
                        <h2 className="mt-3 my-3 fw-bolder text-primary text-center">Sign Up</h2>
                        <Form.Group className="mb-3">
                            <Form.Label><i class="fas fa-user"></i> Name</Form.Label>
                            <Form.Control onBlur={handleName} type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><i class="fas fa-at"></i> Email address</Form.Label>
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label><i class="fas fa-lock"></i> Password</Form.Label>
                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleRegistration} className="w-100 fw-bolder mb-4">
                            Register
                        </Button>
                        <p>Already have an account?<Link to="/login" className="text-decoration-none text-primary"> Login</Link></p>
                    </Form>
                    <div className="d-flex align-items-center justify-content-center border bg-white rounded shadow fw-bolder p-3" onClick={handleGoogleLogin}>
                        <img src="https://i.ibb.co/1n191Qh/google.png" alt="" className="me-2" />Google Login
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Register;