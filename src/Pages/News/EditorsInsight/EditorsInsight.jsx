import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';
import moment from 'moment';
import { FaRegCalendar } from 'react-icons/fa';

const EditorsInsight = ({ news }) => {
    console.log(news)
    return (
        <div className='mt-4'>
            <h3 className='mb-4'>Editors Insight</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <FaRegCalendar></FaRegCalendar>
                            <small className=' ms-2 text-muted'>{moment().format('MMMM D, YYYY ')}</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        </Card.Body>
                        <Card.Footer>
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
                        <Card.Footer>
                            <FaRegCalendar></FaRegCalendar>
                            <small className=' ms-2 text-muted'>{moment().format('MMMM D, YYYY ')}</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
       </div>
    );
};

export default EditorsInsight;