/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../hooks/useTitle';

const Category = () => {
    const categoryNews = useLoaderData();
    const { id } = useParams();
    useTitle('Home')
    return (
        <div>

            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;