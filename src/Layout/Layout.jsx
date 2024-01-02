/* eslint-disable no-unused-vars */
import React from 'react';
import Home from '../pages/Home/Home';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Shared/LeftNav/LeftNav';
import RightNav from '../Shared/RightNav/RightNav';
import NavBar from '../Shared/Header/NavBar/NavBar';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <NavBar />
            <Container>

                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Layout;