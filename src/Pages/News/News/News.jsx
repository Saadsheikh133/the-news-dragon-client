import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
    const news = useLoaderData();
    const { image_url, details, title, category_id } = news;
    return (
        <div>
            <h2 className='mb-4'>Dragon News</h2>
            <Card className='mb-4'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title className='mt-3'>
                        <h3 className='fw-bolder'>
                        {title}
                    </h3>
                    </Card.Title>
                    <Card.Text className='lh-lg'>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger">
                            <FaArrowLeft></FaArrowLeft>
                            All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <EditorsInsight news = {news}></EditorsInsight>
        </div>
    );
};

export default News;