import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Addtodos = () => {
    return (
        <div>
            <h3>Add a Todo</h3>
            < Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Todo Title</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Todo description</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Add Todo
                </Button>
            </Form >

        </div>
    )
}

export default Addtodos







