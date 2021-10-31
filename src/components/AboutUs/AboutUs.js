import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <section className="container">
            <h1 className="text-primary fw-bold my-5">About</h1>
            <div className="bg-white shadow rounded p-4">
                <Row xs={1} md={2} className="p-5">
                    <Col><img className="img-fluid" src="https://i.ibb.co/VMnJC8Z/about.png" alt="" /></Col>
                    <Col>
                        <h3 className="text-secondary fw-bolder">Welcome To <span className="text-primary">Blue</span>Cloud</h3>
                        <p>We provide international travel products & services including Flights, Accommodation, Land transport, Tours, Holiday packages, Visa processing among many other services. We cater to a wide range of needs including Leisure & Business travel. Having a wide network around the world we provide holiday packages to 100+ destinations. From budget travelers to ultra luxury 7 star tourists we cater to every need. Delivering value for your money is our prime goal. With a team of experienced travel professionals we deliver exactly what we promise. We do what we say & say what we do.</p>
                    </Col>
                </Row>
                <div className="p-5">
                    <h4 className="text-secondary fw-bolder">“You haven’t lived if you haven’t travelled”</h4>
                    <p>It is only when you travel 1000s of miles away from your home country & visit a foreign land you realise how beautiful the world is. How different or similar are its people from you & how they are living their lives. Share your stories & be a part of theirs. Widen your horizon, broaden your mind & become a global citizen. I must admit the travel industry in Bangladesh does not have a good customer service reputation. That is why we strive to deliver our best effort for each & every individual who comes to us for any sort of travel services. We not only provide travel services but also promote responsible tourism & practice ethical service standards which is rare in our industry.</p>
                </div>
            </div>

        </section>
    );
};

export default AboutUs;