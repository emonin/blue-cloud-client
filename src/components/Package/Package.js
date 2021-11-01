import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Package = (props) => {
    const { img, name, desc, price } = props.package;
    return (
        <div>
            <Col>
                <Card className="shadow" style={{height: "470px"}}>
                    <Card.Img variant="top" className="img-fluid w-auto h-50" src={img} />
                    <Card.Body>
                        <Card.Title className="fw-bold text-primary">{name}</Card.Title>
                        <Card.Text className="text-secondary">{desc.slice(0, 150)} . . .</Card.Text>
                        <div className="d-flex align-items-center justify-content-between">
                            <Button className="" variant="primary">More Details</Button>
                            <div>
                            <p className="d-flex align-items-center fw-bold">Starts From <span className="fs-4 text-danger">${price}</span></p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Package;