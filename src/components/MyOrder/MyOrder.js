import React from 'react';
import { Col, Button, Row, Card } from 'react-bootstrap';

const MyOrder = (props) => {
    const { email, fee, packageName, address, _id, img } = props.order;
    const handleDelete = props.handleDelete;

    return (
        <Col>
            <Card className="shadow" style={{ height: "100%" }}>
                <Row xs={1} sm={1} md={2} lg={2} className="p-3">
                    <Col>
                        <img className="w-100 h-100 rounded-3 shadow" src={img} alt="" />
                    </Col>
                    <Col>
                        <h6 className="fw-bold" style={{ color: "darkblue" }}>{packageName}</h6>
                        <p>{email}</p>
                        <p>{address}</p>
                        <p style={{ color: "#7e00b4" }} className="fw-bold"><span className="fs-6 text-secondary">Price: </span>${fee}</p>
                        <Button onClick={() => handleDelete(_id)} className="fw-bold" variant="danger text-light"><i class="fas fa-times"></i> Cancel</Button>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
};

export default MyOrder;