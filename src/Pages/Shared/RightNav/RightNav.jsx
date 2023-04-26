import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div className='mb-4'>
            <h4>Login With</h4>
            <Button className='mb-2 mt-4 w-100' variant="outline-info"> <FaGoogle /> Login with Google</Button>
            <Button className='mb-4 w-100' variant="outline-secondary"> <FaGithub /> Login with Github</Button>
            <div className='mt-4'>
                <h4 className='mb-4'>Find Us On</h4>
                <ListGroup className='mt-4'>
                    <ListGroup.Item> <FaFacebook className='me-2' /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter className='me-2' /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram className='me-2' /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='position-relative' style={{height: '500px'}}>
                <div className='mt-4 '>
                    <img className='w-100' src={bg} alt="" />
                </div>
                <div className='text-center text-light  w-100 px-4 mx-auto position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center'>
                    <h2 className='lh-base mb-2'>Create an Amazing Newspaper</h2>
                    <p className='py-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='w-50 mx-auto' variant="danger">Learn More</Button>
                </div>
           </div>
        </div>
    );
};

export default RightNav;