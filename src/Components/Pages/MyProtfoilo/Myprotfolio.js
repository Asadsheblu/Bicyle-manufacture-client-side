import React from 'react';
import    profile from "../.../../../../assets/img/Shibu passport size (1).png"
import linkdin from "../../../assets/img/icons8-linkedin-circled-48.png"
import facebook from "../../../assets/img/icons8-facebook-48.png"
import github from "../../../assets/img/icons8-github-48.png"
const Myprotfolio = () => {
    return (
        <div>
            <div class="card w-full">
           
  

  <div class="card-body items-center text-center">
     <div class="avatar items-center justify-items-center text-center">
  <div class="w-24 rounded-full items-center text-center m-10 justify-items-center  ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={profile} />
  </div>
  </div>
    <h2 class="card-title">Name:Md. Asaduz Zaman</h2>
    <h2 class="card-title">Present Address : Feni </h2>
    <h2 class="card-title">Contact No : +8801609101537</h2>
    <h2 class="card-title">Email : Shebluasad@gmail.com</h2>
    <h2 class="card-title">
    <a href=" www.linkedin.com/in/md-asaduz-zaman-Sheblu/"> <img src={linkdin} alt="" /></a>
    <a href="https://web.facebook.com/md.sheblu.161/"> <img src={facebook} alt="" /></a>
    <a href="https://github.com/Asadsheblu/"> <img src={github} alt="" /></a>

    </h2>
    <div class="flex flex-col w-full">
  <div class="grid card font-bold text-2xl place-items-center">Skill</div> 
  <div class="divider"></div> 
  </div>
  <ul className='font-bold'>
    <li><span classname="font-bold text-2xl">Expert</span> : React.js,Html,Css,(bootsrap),Modern Javascript.</li>
    
    
    <li><p classname="font-bold  text-2xl">Famillar:</p> :  Figma,Rest Api,Psd.</li>
    <li>Tools: Heroku,netlify,git,Github,Postman,npm.</li>
  </ul>
        

   
    <div class="card-actions">
      <a href="https://drive.google.com/file/d/1dGrgE5IaPbfgazwTFv5aCHd_Pr0ESjE9/view?usp=sharing"><button class="btn btn-outline btn-info">Download Resume</button></a>
    </div>
  </div>
</div>
<div class="flex flex-col w-full">
  <div class="grid card font-bold text-2xl ms-14 text-center">Career Objective</div> 
  <div class="divider"></div> 
   
  </div> 
  <div class="grid card  text-2xl ms-14 text-center">Self-motivated team player with one years of experience seeking a position as a lead web developer with 
        Next Generation Web Development where I can apply my advanced knowledge of web design with my 
      leadership abilities to meet client needs and exceed their  expectations.</div> 
<div class="flex flex-col w-full pt-5">
  <div class="grid card font-bold text-2xl ms-14 text-center">Experience</div> 
  <div class="divider"></div> 
   
  </div> 
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10 font-bold">
    <h1>Organization:Fast Coder Software Solution</h1>
    <h1>Key-Responsibilities:
 Jr.Frontend Developer(Intern)</h1>
    <h6> Duration: Feb2022-Running</h6>
    
    </div> 


<h1 className='text-2xl font-bold text-center'>Projects:</h1>
<hr />
<div className="text-center m-10">
<h6 classname="text-center">1.
Mahira Furniture-Furniture Company Website  <a href="https://mahira-furniture.web.app/"><button  className='btn btn-xs btn-primary'>Live Website</button></a> 
  ||  <a href="https://github.com/Asadsheblu/Mahirafurniture-client"><button  className='btn btn-xs btn-primary'>ClientCode</button></a> ||
  <a href="https://github.com/Asadsheblu/Mahirafurniture-server"><button  className='btn btn-xs btn-primary'>ServerCode</button></a> </h6>
  <h6>Technology Used:
 React.js,express.js,Mongodb,Bootstrap,Firebase</h6>
</div>
<div className="text-center m-10">
<h6 classname="text-center">1.
Mahira Furniture-Furniture Company Website  <a href="https://mahira-furniture.web.app/"><button  className='btn btn-xs btn-primary'>Live Website</button></a> 
  ||  <a href="https://github.com/Asadsheblu/Mahirafurniture-client"><button  className='btn btn-xs btn-primary'>ClientCode</button></a> ||
  <a href="https://github.com/Asadsheblu/Mahirafurniture-server"><button  className='btn btn-xs btn-primary'>ServerCode</button></a> </h6>
  <h6>Technology Used:
 React.js,express.js,Mongodb,Bootstrap,Firebase</h6>
</div>
<div className="text-center m-10">
<h6 classname="text-center">1.
Dream Artisan- Wedding Service Website <a href="https://mahira-furniture.web.app/"><button  className='btn btn-xs btn-primary'>Live Website</button></a> 
  ||  <a href="https://github.com/Asadsheblu/Mahirafurniture-client"><button  className='btn btn-xs btn-primary'>ClientCode</button></a> ||
  <a href="https://github.com/Asadsheblu/Mahirafurniture-server"><button  className='btn btn-xs btn-primary'>ServerCode</button></a> </h6>
  <h6>Technology Used:
 React.js,express.js,Mongodb,Bootstrap,Firebase</h6>
</div>
  <div className="text-center m-10 font-bold">
    <h3>Educational Qualification:</h3>
    <h4>B.sc Hon’s In Zoology
National University</h4>
  </div>
  <div className="text-center m-10 font-bold">
    <h3>Course:</h3>
    <h4>Complete Web Development Course By Programmming hero</h4>
  </div>
  <div className="text-center m-10 font-bold">
    <h3>Language:</h3>
    <h4>Bengali:Native --- English:Conversationa</h4>
  </div>

 







        </div>
    );
};

export default Myprotfolio;