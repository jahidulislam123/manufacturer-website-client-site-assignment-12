import React from 'react';
import AddedReview from './AddedReview';
import Banner from './Banner';
import ExtraOne from './ExtraOne';
import Line from './Line';
import Reveiw from './Reveiw';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <AddedReview></AddedReview>
            <Reveiw></Reveiw>
            <ExtraOne></ExtraOne>
            <Line></Line>
            <h2>this is home page</h2>
        </div>
    );
};

export default Home;