import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const CategoryNews = ({ news }) => {
    const { _id, title, author, image_url, details, rating, total_view } = news;
    console.log(news)
    return (
        <div className='mt-4'>
            <Card>
                <Card.Header as="h5">
                    <div className='d-flex align-items-center gap-4'>
                        <Image style={{ width: '40px' }} className='ms-2' src={author?.img} roundedCircle />
                        <div className='flex-grow-1 align-items-center'>
                            <p className='mb-0'>{author?.name}</p>
                            <p className='text-secondary mt-0'><small>{moment(author?.published_date).format('yyyy-MM-D') }</small></p>
                        </div>
                        <div>
                            <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className='mb-1 mt-3'>{title}</Card.Title>
                    <Card.Img className='mb-4 mt-4' variant="top" src={image_url} />
                    <Card.Text className='mt-4'>
                        {details.length < 250 ? <>{details}</> : 
                            <>{details.slice(0 - 250.)}..... <Link to={`/news/${_id}`}>Red More</Link></>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div className=' align-items-center'>
                        <Rating
                            placeholderRating={rating?.number}
                            readonly
                            className='me-2'
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        {rating?.number}
                    </div>
                    <div>
                        <FaEye className='me-2'></FaEye> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CategoryNews;