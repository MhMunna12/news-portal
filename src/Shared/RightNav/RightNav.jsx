/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from '../../pages/QZone/QZone';
import bg from '../../assets/bg.png';
import RightEditor from './RightEditor/RightEditor';
const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2 shadow' variant="light"><FaGoogle /> Login with Google</Button>
            <Button className='mb-4 shadow' variant="light"><FaGithub /> Login with Github</Button>
            <div>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone ></QZone>
            <div>
                <img src={bg} alt="" />
            </div>

        </div>
    );
};

export default RightNav;