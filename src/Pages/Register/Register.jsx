import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setSuccess('User has been created successfully')
                form.reset();
            })
            .catch(error => {
                setError(error.message);
        })
    }

    const handleConditions = event => {
        setAccepted(event.target.checked);
    }
    return (
        <Container className='w-25 mx-auto'>
            <h2>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Your Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleConditions}
                        type="checkbox"
                        name="accept"
                        label={<>Accept <Link className='link-offset-1 link-offset-6-hover text-decoration-none' to = '/terms'>Terms and conditions</Link></>} />
                </Form.Group>
                <Button className='w-100 mx-auto cursor-pointer' disabled= {!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text>
                    <p className='mt-2'>Already have an account? <Link className='text-decoration-none' to = "/login">Please Login</Link></p>
                </Form.Text>
                <Form.Text className="text-success">
                    <p>{ success }</p>
                </Form.Text>
                <Form.Text className="text-danger">
                    <p>{ error }</p>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;