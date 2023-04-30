import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Conditions = () => {
    return (
        <Container>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nesciunt facere laborum maxime commodi ducimus blanditiis, laudantium eligendi ipsam veniam repudiandae alias similique enim, atque minima a totam placeat excepturi.</p>
            <p>Go back to <Link to = "/register">Register</Link></p>
        </Container>
    );
};

export default Conditions;