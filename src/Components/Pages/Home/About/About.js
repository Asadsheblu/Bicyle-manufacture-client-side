import React from 'react';
import ciycle from "../../../../assets/img/RockShox-Reverb-AXS-XPLR-dropper-post-Reverb-8b6dcf1.webp"
const About = () => {
    return (
        <div>
            <h1 className="text-center text-3xl p-10">About us</h1>
                 <div className='ms-10 me-10 grid grid-cols-1 lg:grid-cols-2 p-10'>
             <div className="w-96">
             <img src={ciycle} alt="" />
             </div>
             <div className='pt-10'>
     <h3 className='text-red-500 text-4xl'>WE AIM TO MANUFACTURE FOR YOU THE BEST QUALITY PRODUCTS</h3>
                     <p className="p-2">Established in 1994,BICYCLES MANIA MANUFACTURE has made a name for itself in the list of top suppliers of bicycle spare parts, complete bicycle, motorcycle parts, fasteners & many more in BD. It is one of the  listed products in BD.They are amongst the reputed Indian organizations, extremely engaged in giving bicycle Parts and accessories of, motorcycles parts, complete bicycles, etc and good quality range of Parts and accessories of bicycles, motorcycles, etc..</p>
     </div>
      
            
       </div>
        </div>
    );
};

export default About;