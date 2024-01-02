/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/Header/NavBar/NavBar';
import Header from '../Shared/Header/Header';

const NewsLayout = () => {

    return (
        <div>
            <Header />
            <div className="mt-3">
                <Container>

                    <Row>

                        <Col lg={9}>
                            <Outlet></Outlet>
                        </Col>
                        <Col lg={3}>
                            <RightNav></RightNav>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default NewsLayout;