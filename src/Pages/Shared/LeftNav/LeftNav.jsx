import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';
import { FaCalendar, FaRegCalendar } from 'react-icons/fa';
import moment from 'moment';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h4 className='mb-4'>All Category</h4>
            <div className='ms-4'>
                {
                    categories.map(category => <p
                        key = {category.id}
                    >
                        <Link to = {`/category/${category.id}`} className='text-decoration-none fs-5 text-secondary'>{category.name}</Link>
                    </p>)
                }
            </div>
            <Row lg={1} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={first} />
                            <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        </Card.Body>
                        <Card.Footer className='d-flex align-items-center'>
                            <span className='me-4'>sports</span>
                            <FaRegCalendar></FaRegCalendar>
                            <small className=' ms-2 text-muted'>{moment().format('MMMM D, YYYY ') }</small>
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={second} />
                            <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        </Card.Body>
                        <Card.Footer className='d-flex align-items-center'>
                            <span className='me-4'>sports</span>
                            <FaRegCalendar></FaRegCalendar>
                            <small className=' ms-2 text-muted'>{moment().format('MMMM D, YYYY ')}</small>
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={third} />
                            <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        </Card.Body>
                        <Card.Footer className='d-flex align-items-center'>
                            <span className='me-4'>sports</span>
                            <FaRegCalendar></FaRegCalendar>
                            <small className=' ms-2 text-muted'>{moment().format('MMMM D, YYYY ')}</small>
                        </Card.Footer>
                        </Card>
                    </Col>
            </Row>
        </div>
    );
};

export default LeftNav;