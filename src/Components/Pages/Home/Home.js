import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Slider from './About/Slider';
import Banner from './Banner/Banner';
import Parts from './Parts/Parts';
import Bsummary from "../Home/Bsummary/Bsummary"
import About from './About/About';
import Review from './Review';
import Summary from './Parts/Summary/Summary';

const Home = () => {
    return (
        <div className="bg-black text-white">
          
            <Banner />
            <About />
            <Slider />
            <Parts />
            <Summary />
          <Review />
           
        </div>
    );
};

export default Home;