import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Slider from './About/Slider';
import Banner from './Banner/Banner';
import Parts from './Parts/Parts';
import Bsummary from "../Home/Bsummary/Bsummary"

const Home = () => {
    return (
        <div className="bg-black text-white">
          
            <Banner />
            <Slider />
            <Parts />
           
        </div>
    );
};

export default Home;