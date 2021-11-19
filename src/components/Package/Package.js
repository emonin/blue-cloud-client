import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Package = (props) => {
    const history = useHistory();
    const handleDetailsButton = id =>
    {
        history.push(`/package/${id}`)
    }
    const { img, name, desc, price, _id } = props.package;
    return (
        <div>
            <Col>
                <Card className="shadow" style={{ height: "470px" }}>
                    <Card.Img variant="top" className="img-fluid w-auto h-50" src={img} />
                    <Card.Body>
                        <Card.Title className="fw-bold text-primary">{name}</Card.Title>
                        <Card.Text className="text-secondary">{desc.slice(0, 150)} . . .</Card.Text>
                        <div className="d-flex align-items-center justify-content-between">
                            <button onClick={() => handleDetailsButton(_id)} className="button--rayen fw-bold" data-text="Details"><span>Details</span></button>
                            <div>
                                <p className="d-flex align-items-center fw-bold">Starts From <span className="fs-4 ms-2" style={{ color: "#001ba3" }}>${price}</span></p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Package;