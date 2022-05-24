import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts,setParts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/parts')
        .then(res=>res.json())
        .then(data=>setParts(data))
    },[])
    return (
        <div>
            <h2 className='text-red-500 text-center text-3xl pt-10'>BICYCLES MANIA FEATURED CATEGORIES</h2>
            <p className='text-center text-black-300'>We Manufactured in All Cycle Parts, Chain-Wheels, saddles, Free Wheels, Hub Parts, Pedals, chains and accessories.</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 p-10'>
            {
                parts?.slice(0,6).map(part=><Part key={part?._id} part={part}></Part>)
            }
        </div>
        </div>
    );
};

export default Parts;