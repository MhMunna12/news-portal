/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavBar from './NavBar/NavBar';
const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit dolor sit</p>
                <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
            </div>
            <div className='d-flex bg-secondary p-2 ' style={{ borderRadius: '5px' }}>
                <Button variant="danger">Latest</Button>
                <Marquee speed={60} pauseOnHover={true}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

        </Container >
    );
};

export default Header;