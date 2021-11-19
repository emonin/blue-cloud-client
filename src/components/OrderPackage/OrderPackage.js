import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './OrderPackage.css'

const OrderPackage = () => {
    const history = useHistory();
    const redirect_url = '/home';
    const [show, setShow] = useState(false);
    const { user } = useAuth();
    const id = useParams()
    const getId = id.id;
    const url = `https://bluecloud-server.herokuapp.com/packages/${getId}`;
    const [singlePackage, setSinglePackage] = useState({});
    const { img, name, desc, price } = singlePackage;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSinglePackage(data))
    }, []);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleClose = () => {
        setShow(false);
        history.push(redirect_url)
    }

    const handleShow = () => setShow(true);
    const onSubmit = data => {
        data.fee = price;
        data.packageName = name;
        data.img = img;
        data.status = "Pending";
        fetch("https://bluecloud-server.herokuapp.com/order-confirm",
            {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
    };
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Booking Confirm</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're booking confirmed!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="container my-5 shadow rounded p-4 bg-white">
                <Row xs={1} sm={1} md={2} lg={2} className="mb-5">
                    <Col>
                        <img className="w-100 rounded-3 shadow" src={img} alt="" />
                    </Col>
                    <Col>
                        <h3 className="fw-bold" style={{ color: "darkblue" }}>{name}</h3>
                        <p>{desc}</p>
                        <h5 style={{ color: "#7e00b4" }} className="fw-bold"><span className="fs-6 text-secondary">Price: </span>${price} Only</h5>
                    </Col>
                </Row>
                <div className="bg-dark px-3 py-4">
                    <h2 className="fw-bold text-light">Product Order Form</h2>
                </div>
                <div className="p-4 border border-left border-right border-bottom">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="mb-3">
                            <Col>
                                <input {...register("fullname")}
                                    value={user.displayName}
                                    className="p-2 mb-3 w-100 shadow-sm border rounded"
                                />
                                <input {...register("email")}
                                    value={user.email}
                                    className="p-2 mb-3 w-100 shadow-sm border rounded"
                                />
                                <input {...register("address", { required: true })}
                                    placeholder="Address*"
                                    className="py-4 px-2 mb-3 w-100 shadow-sm border rounded"
                                />
                                <input {...register("date", { required: true })}
                                    type="date"
                                    className="p-2 mb-3 w-100 shadow-sm border rounded"
                                />
                            </Col>
                            <Col>
                                <div className="Yorder">
                                    <table>
                                        <tr>
                                            <th colspan="2" className="fw-bold fs-4 text-secondary text-decoration-underline">Your Package</th>
                                        </tr>
                                        <tr>
                                            <td>Package Name :</td>
                                            <td className="fw-bold fs-5 text-primary">{name}</td>
                                        </tr>
                                        <tr>
                                            <td>Package Fee : </td>
                                            <td className="fw-bold fs-6 text-danger">
                                                $ {price}</td>
                                        </tr>
                                    </table><br />
                                    <div>
                                        <input type="radio" name="group" value="dbt" checked /> Direct Bank Transfer
                                    </div>
                                    <p>
                                        Make your payment directly into our bank account.Please use your Order ID as the payment reference.
                                    </p>
                                    <div className="mb-3">
                                        <input type="radio" name="group" /> Card : <span>
                                            <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50" />
                                        </span>
                                    </div>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <input onClick={handleShow} className="p-2 fw-bold text-white bg-primary border rounded" type="submit" value="Place Order" />
                                </div>
                            </Col>
                        </Row>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderPackage;