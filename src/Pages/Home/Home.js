import React from 'react';
import AddedReview from './AddedReview';
import Banner from './Banner';
import Reveiw from './Reveiw';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <AddedReview></AddedReview>
            <Reveiw></Reveiw>
            <h2>this is home page</h2>
        </div>
    );
};

export default Home;