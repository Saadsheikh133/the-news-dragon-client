import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);
    const handleSignIn = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('User login successfully')
                form.reset();
            })
            .catch(error => {
                setError(error.message);
        })
    }
    return (
        <Container className='w-25 mx-auto'>
            <h2 className='text-center'>Please Login</h2>
            <Form onSubmit={handleSignIn}>
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

export default Login;