import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Addtodos = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or description cannot be blank")
        }
        props.addTodos(title, desc)
    }
    return (
        <div className='container'>
            <h3>Add a Todo</h3>
            < Form onSubmit={submit} >
                <Form.Group className="mb-3" >
                    <Form.Label>Todo Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Todo description</Form.Label>
                    <Form.Control type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} />
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







