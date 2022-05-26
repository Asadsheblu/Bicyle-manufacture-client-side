import React from 'react';
import CountUp from 'react-countup';
const Summary = () => {
    return (
        <div>
            <div className="text-white text-center text-2xl m-10">
                <h1>Our Business Summary</h1>
            </div>
          <div className="stats  w-full">
  
  <div className="stat text-center">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Sales</div>
   
   <div className='text-red-500'>
   <CountUp  start={0} end={31000} delay={2} duration="10">
  {({ countUpRef }) => (
    <div>
     <div className="stat-value" ref={countUpRef}>31K</div>
    </div>
  )}
</CountUp>
   </div>
    
    
  </div>
  
  <div className="stat text-center">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">Client</div>
   <div className='text-primary'>
   <CountUp start={0} end={300} delay={2} duration="10">
  {({ countUpRef }) => (
    <div>
     <div className="stat-value" ref={countUpRef}>300+</div>
    </div>
  )}
</CountUp>
   </div>
   
  </div>
  
  <div className="stat text-center">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Employer</div>
    <div className='text-secondary'>
    <CountUp start={0} end={700} delay={2} duration="10">
  {({ countUpRef }) => (
    <div>
     <div className="stat-value" ref={countUpRef}>700</div>
    </div>
  )}
</CountUp>
    </div>
   
  </div>
  
</div>  
        </div>
    );
};

export default Summary;