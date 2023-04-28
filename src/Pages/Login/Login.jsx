import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
            <h2 className='text-center'>Please Login</h2>
            <Form className='w-25 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept terms and conditions" />
                </Form.Group>
                <Button className='w-100 mx-auto' variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text>
                    <p className='mt-2'>New to this site? <Link to ="/register">Register Now</Link></p>
                </Form.Text>
                <Form.Text className="text-danger">
                    
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;