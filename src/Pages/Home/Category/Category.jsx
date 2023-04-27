import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryNews from '../CategoryNews/CategoryNews';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This Category News: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <CategoryNews
                    key={news._id}
                    news = {news}
                ></CategoryNews>)
            }
        </div>
    );
};

export default Category;