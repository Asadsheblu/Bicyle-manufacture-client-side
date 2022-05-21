import React from 'react';
import { useCountUp } from 'react-countup';
const Bsummary = () => {
    useCountUp({ ref: 'counter', end: 1234567 });
    return <span id="counter" />;
};

export default Bsummary;