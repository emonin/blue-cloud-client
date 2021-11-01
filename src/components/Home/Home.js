import React, { useEffect, useState } from 'react';
import { Carousel, Tabs, Tab, Row, Col, Form, Button } from 'react-bootstrap';
import Package from '../Package/Package';
import './Home.css'

const Home = () => {

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://bluecloud-server.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div>
            {/* 
            ------------
            Banner Start 
            ------------
        */}
            <Carousel fade>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 img-fluid"
                        src="https://i.ibb.co/bRLv5vh/banner1.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 img-fluid"
                        src="https://i.ibb.co/sqFGXLb/banner2.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 img-fluid"
                        src="https://i.ibb.co/ZHdNTYR/banner3.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            {/* 
            -----------
            Banner End
            -----------
        */}
            {/* 
            --------------------
            Search Section Start 
            --------------------
        */}
            <section className="container mt-5 shadow rounded p-5 bg-white">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="pb-3 mb-3">
                    <Tab eventKey="profile" title="Flights">
                        <h3 className="fw-bold text-primary">Search for Best Flights</h3>
                        <div>
                            <Row md={1} lg={3} className="fw-bold mt-5 text-secondary">
                                <Col>
                                    <p><i class="fas fa-map-marker-alt"></i> From</p>
                                    <input type="text" name="from" placeholder="City or Airport name" className="p-3 border border-primary text-primary" />
                                </Col>
                                <Col>
                                    <p><i class="fas fa-map-marker-alt"></i> To</p>
                                    <input type="text" name="from" placeholder="City or Airport name" className="p-3 border border-primary text-primary" />
                                </Col>
                                <Col>
                                    <p><i class="far fa-calendar-alt"></i> Departing</p>
                                    <input type="date" name="date" className="p-3 border border-primary" />
                                </Col>
                            </Row>
                            <Row md={1} lg={3} g-4 className="fw-bold my-5 text-secondary">
                                <Col>
                                    <p><i class="fas fa-user"></i> Adult (12+)</p>
                                    <Form>
                                        <Form.Check
                                            inline
                                            label="0"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="1"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="2"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="3"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="4"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="5+"
                                            name="group"
                                            type="radio"
                                        />
                                    </Form>
                                </Col>
                                <Col>
                                    <p><i class="fas fa-child"></i> Children (2-11)</p>
                                    <Form>
                                        <Form.Check
                                            inline
                                            label="0"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="1"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="2"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="3"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="4+"
                                            name="group"
                                            type="radio"
                                        />
                                    </Form>
                                </Col>
                                <Col>
                                    <p><i class="fas fa-baby"></i> Infant</p>
                                    <Form>
                                        <Form.Check
                                            inline
                                            label="0"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="1"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="2"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="3"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="4+"
                                            name="group"
                                            type="radio"
                                        />
                                    </Form>
                                </Col>
                            </Row>
                            <div className="fw-bold mb-5 text-secondary">
                                <p><i class="fas fa-plane"></i> Class</p>
                                <Button variant="primary" className="me-2">Economy</Button>
                                <Button variant="outline-primary" className="me-2">Premium Economy</Button>
                                <Button variant="outline-primary" className="me-2">Business</Button>
                                <Button variant="outline-primary">First</Button>
                            </div>
                            <Button variant="primary" className="fw-bold">Search for Flights</Button>
                        </div>
                    </Tab>
                    <Tab eventKey="" title="Hotels">

                        <h3 className="fw-bold text-primary">Search and Save on Hotels</h3>
                        <div>
                            <Row md={1} lg={3} g-4 className="fw-bold mt-5 text-secondary">
                                <Col>
                                    <p><i class="fas fa-map-marker-alt"></i> Where are you going</p>
                                    <input type="text" name="from" placeholder="City, Country" className="p-3 border border-primary text-primary" />
                                </Col>
                                <Col>
                                    <p><i class="far fa-calendar-alt"></i> Check-in</p>
                                    <input type="date" name="date" className="p-3 border border-primary" />
                                </Col>
                                <Col>
                                    <p><i class="far fa-calendar-alt"></i> Check-out</p>
                                    <input type="date" name="date" className="p-3 border border-primary" />
                                </Col>
                            </Row>
                            <Row md={1} lg={3} g-4 className="fw-bold my-5 text-secondary">
                                <Col>
                                    <p><i class="fas fa-user"></i> Adult</p>
                                    <Form>
                                        <Form.Check
                                            inline
                                            label="0"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="1"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="2"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="3"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="4"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="5+"
                                            name="group"
                                            type="radio"
                                        />
                                    </Form>
                                </Col>
                                <Col>
                                    <p><i class="fas fa-child"></i> Children</p>
                                    <Form>
                                        <Form.Check
                                            inline
                                            label="0"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="1"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="2"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="3"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="4+"
                                            name="group"
                                            type="radio"
                                        />
                                    </Form>
                                </Col>
                                <Col>
                                    <p><i class="far fa-square"></i> Room</p>
                                    <Form>
                                        <Form.Check
                                            inline
                                            label="0"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="1"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="2"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="3"
                                            name="group"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="4+"
                                            name="group"
                                            type="radio"
                                        />
                                    </Form>
                                </Col>
                            </Row>
                            <div className="fw-bold mb-5 text-secondary">
                                <p><i class="fas fa-square"></i> Class</p>
                                <Button variant="primary" className="me-2">Non AC</Button>
                                <Button variant="outline-primary" className="me-2">AC</Button>
                                <Button variant="outline-primary" className="me-2">V.I.P</Button>
                            </div>
                            <Button variant="primary" className="fw-bold">Search for Hotels</Button>
                        </div>
                    </Tab>
                </Tabs>
            </section>
            {/* 
            --------------------
            Search Section Start 
            --------------------
        */}
            {/* 
            --------------------------
            Tour Package Section Start 
            --------------------------
        */}
            <h1 className="text-secondary fw-bold container my-5">TOUR PACKAGES</h1>
            <section className="container mt-5 shadow rounded p-5 bg-white">
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {
                        packages.map(ourPackage => <Package
                            key={ourPackage._id}
                            package={ourPackage}
                        />)
                    }
                </Row>
            </section>
            {/* 
                ------------------------
                Tour Package Section End 
                ------------------------
            */}
            {/* 
            -----------------------
            Subscribe Section Start 
            -----------------------
        */}
            <section className="container mt-5 shadow rounded p-4 bg-white text-center">
                <h4 className="fw-bold text-primary">Save time, save money!</h4>
                <p>Sign up and we'll send the best deals to you</p>
                <div className="d-flex justify-content-center align-items-center">
                    <input type="text" name="from" placeholder="Your Email" className="p-3 border border-primary text-primary me-1 rounded w-50" />
                    <Button variant="primary" className="p-3">Subscribe</Button>
                </div>
            </section>
            {/* 
                ---------------------
                Subscribe Section End 
                ---------------------
            */}
            {/* 
            ------------------
            App Download Start 
            ------------------
        */}
            <section className="container mt-5 ">
                <Row xs={1} sm={1} lg={2}>
                    <Col>
                        <h2 className="fw-bold mt-5 mb-4 text-secondary">The World in Your Pocket</h2>
                        <p className="fw-bold">Unlock a world of travel possibilities with the <span className="text-primary">BlueCloud</span> app. Access mobile-only deals, view your trip details on the go and search hundreds of travel sites with one tap.</p>
                        <div className="d-flex align-items-center my-5">
                            <img className="w-25 me-4" src="https://i.ibb.co/JCShpGr/appStore.png" alt="" />
                            <img className="w-25" src="https://i.ibb.co/H4qZD4L/play-Store.png" alt="" />
                        </div>
                    </Col>
                    <Col>
                        <img className="w-50 mx-auto d-block img-fluid" src="https://i.ibb.co/TKZdDjK/app-bluecloud.png" alt="" />
                    </Col>
                </Row>
            </section>
            {/* 
                ----------------
                App Download End 
                ----------------
            */}
        </div >
    );
};

export default Home;