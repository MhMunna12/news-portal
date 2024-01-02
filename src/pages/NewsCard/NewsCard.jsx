/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from "react-icons/fa";
import moment from 'moment';
import Rating from 'react-rating';
const NewsCard = ({ news }) => {
    // console.log(news);
    const { _id, title, details, image_url, author, rating, total_view } = news;
    return (
        <div>
            <Card className=" mb-3 ">

                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author.img} roundedCircle />
                    <div className="ps-2 flex-grow-1 ">
                        <p className='mb-0'>{author?.name}</p>
                        <p>{moment(author.published_date).format('DD.MM.YYYY')}</p>
                    </div>
                    <div>
                        <FaRegBookmark /><FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> : <>{details.slice(0, 240)} <Link to={`/news/${_id}`}>Read more</Link> </>}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1 '>
                        <Rating
                            placeholderRating={rating?.number}
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar className='text-warning' />}
                            fullSymbol={<FaStar />}
                        />
                        <span>{rating?.number}</span>

                    </div>
                    <div>
                        <FaEye /> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;