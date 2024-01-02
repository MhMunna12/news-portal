/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Auth/AuthProvider/AuthProvider';
import LoginLayout from './../../../Layout/LoginLayout';
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }
    return (
        <div className='mt-1'>
            <Container>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="/category/0">Home</Nav.Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>

                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets"><FaUserCircle style={{ fontSize: '2rem' }} /></Nav.Link>
                                {user ? <Button onClick={handleLogout} className="" variant="dark">Logout</Button> :
                                    <Link to='/login'><Button className="" variant="dark">Login</Button></Link>
                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar >
            </Container>
        </div>
    );
};

export default NavBar;