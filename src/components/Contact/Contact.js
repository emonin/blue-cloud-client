import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">Get In Touch</h1>
            <div className="shadow rounded p-5 bg-white">
                <p><span className="text-danger fw-bold">Important-</span> It is highly recommended to you that you talk to us about your tours and travels. We have our experienced tour experts who will guide you with all the valid information that you need to know about your tours. You can ask questions and can have a clear idea about your tour. Accommodations, foods, visas, pricing of packages, all information should be discussed beforehand to avoid any misunderstanding in the future. You can reach us through email. Send us a mail and we will get back at you right away. Or you can call us directly at the given phone number and talk to us. Best way is to come visit us, have a cup of tea and talk to our expert guides in person and book your package right away!</p>
                <div className="mt-5">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address*</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Name*</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Subject*</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Telephone*</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message*</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <h6 className="text-danger my-3">* required</h6>
                    <Button className="px-5" variant="outline-primary">Send</Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;