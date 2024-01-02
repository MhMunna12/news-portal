/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Auth/AuthProvider/AuthProvider';
import useTitle from './../../../hooks/useTitle';

const Login = () => {
    const { SignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')
    let from = location.state?.from?.pathname || "/"
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        SignIn(email, password)
            .then(result => {
                const loggedIn = result.user;
                form.reset()
                navigate(from, { replace: true })
                console.log(loggedIn);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <Container className="w-25 mx-auto">
            <h3>Please Login</h3>
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
                    <Form.Check name='accept' type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Dont Have an Account? <Link to='/register'>Register</Link>
                </Form.Text>



            </Form>
        </Container>
    );
};

export default Login;