import React, { useEffect, useState } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [control, setControl] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const email = user.email;
    const url = `https://bluecloud-server.herokuapp.com/my-orders/${email}`;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [control])
    const handleDelete = (id) => {
        setShow(true);
        fetch(`https://bluecloud-server.herokuapp.com/delete-order/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            })
    };
    return (
        <section className="container">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Package</Modal.Title>
                </Modal.Header>
                <Modal.Body>Delete Package?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
            <h1 className="text-primary fw-bold my-5">My Booking</h1>
            <div className="bg-white shadow rounded p-4">
                {
                    orders.length === 0
                        ? <p className="text-center fw-bold text-danger">You have no Booking right Now!</p>
                        : <div>
                            <h5 className="mb-3 fw-bold text-primary">Booking : {orders.length}</h5>
                            <Row xs={1} sm={1} md={2} lg={2} className="g-4">
                                {
                                    orders.map(order => <MyOrder
                                        key={order._id}
                                        order={order}
                                        handleDelete={handleDelete}
                                    />)
                                }
                            </Row>
                        </div>
                }
            </div>
        </section>
    );
};

export default MyOrders;