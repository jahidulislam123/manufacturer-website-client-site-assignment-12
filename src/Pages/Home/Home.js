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
            <h2 className='badge p-5  text-center  badge-primary   text-white text-2xl font-bold'>You can purchage below by booking</h2>
            <Tools></Tools>
            <AddedReview></AddedReview>
            <h2 className='badge p-5 badge-primary   text-white text-2xl my-5 font-bold'>Get overall summary</h2>

            <Reveiw></Reveiw>
            <ExtraOne></ExtraOne>
            <Line></Line>
            <h2>this is home page</h2>
            
        </div>
    );
};

export default Home;