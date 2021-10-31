import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        /* 
        ---------------------------
        Header Component and Navbar
        --------------------------- 
        */
        <div>
            <Navbar className="header-bg py-4" expand="lg">
                <Container className="d-flex justify-content-between">
                    <div className="d-flex justify-content-center align-items-center">
                        <div>
                            <Navbar.Brand className="fw-bolder fs-5 me-5"><Link to="/"><img className="img-fluid" src="https://i.ibb.co/7JY2W4g/logo.png" alt="" /></Link></Navbar.Brand>
                        </div>
                        <div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto fw-bold">
                                    <Nav.Link><Link to="/home" className="hover-line text-color text-decoration-none  me-3">Home</Link></Nav.Link>
                                    <Nav.Link><Link to="/services" className="hover-line text-color text-decoration-none  me-3">Services</Link></Nav.Link>
                                    <Nav.Link><Link to="/doctors" className="hover-line text-color text-decoration-none  me-3">Doctors</Link></Nav.Link>
                                    <Nav.Link><Link to="/about" className="hover-line text-color text-decoration-none  me-3">About Us</Link></Nav.Link>
                                    <Nav.Link><Link to="/contact" className="hover-line text-color text-decoration-none  me-3">Contact</Link></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </div>
                    <div>
                        {
                            !user.email
                                ? <div><Link to="/login"><Button className="mx-3 fw-bold" variant="primary">Login</Button></Link>
                                    <Link to="/register"><Button className="fw-bold" variant="outline-primary text-light">Register</Button></Link></div>
                                : <span className="text-info"><span className="me-3"><i className="far fa-user"></i> {user.displayName} </span><Button onClick={logOut} className="fw-bold" variant="outline-danger text-light">Logout</Button></span>
                        }
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;