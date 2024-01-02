/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInside from './EditorInside/EditorInside';

const News = () => {
    const news = useLoaderData();
    const { _id, title, details, image_url, category_id } = news;
    return (
        <div>
            <h4>Bangla News</h4>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger">All News in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorInside />
        </div>
    );
};

export default News;