import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageAllBooking = () => {
    const [booking, setBooking] = useState([]);
    const [status, setStatus] = useState("")
    const handleStatus = (e) => {
        const statusValue = e.target.value;
        setStatus(statusValue);
    }
    const handleStatusUpdate = (id) => {
        fetch(`https://bluecloud-server.herokuapp.com/update-status/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status })

        })
    }
    useEffect(() => {
        fetch('https://bluecloud-server.herokuapp.com/all-booking')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    return (
        <section className="container">
            <h1 className="text-primary fw-bold my-5">Manage All Booking</h1>
            <div className="bg-white shadow rounded p-4">
                <Table bordered className="fw-bold">
                    <thead striped className="bg-secondary">
                        <tr className="text-white">
                            <th>Package Name</th>
                            <th>Email</th>
                            <th>Cost</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        booking.map(bk =>
                        (
                            <tbody className="border border-top-0">
                                <tr>
                                    <td>
                                        {bk.packageName}
                                    </td>
                                    <td>
                                        {bk.email}
                                    </td>
                                    <td className="text-danger">
                                        ${bk.fee}
                                    </td>
                                    <td>
                                        <select onChange={handleStatus}>
                                            <option value="Pending">{bk.status}</option>
                                            <option value="Approve">Approve</option>
                                        </select>
                                    </td>
                                    <td>
                                        <Button onClick={() => handleStatusUpdate(bk._id)} variant="success" className="text-white fw-bold"><i className="fas fa-check"></i> Update</Button>{' '}
                                        <Button variant="danger" className="text-white"><i className="fas fa-times"></i></Button>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }

                </Table>
            </div>
        </section>
    );
};

export default ManageAllBooking;