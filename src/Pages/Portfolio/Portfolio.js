import React from 'react';

import img from '../../images/IMG_20200619_155037.jpg'


const Portfolio = () => {
    return (
        <div className='text-left'>
            <h2 className='text-2xl font-bold text-orange-500\'>This is my portfolio  </h2>
            <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
  <div class="card  w-80 bg-base-100 shadow-xl">
  <figure class="px-10  pt-10">
    <img  src={img} alt="Shoes" class="rounded-xl " />
  </figure>
  <div class="card-body  items-center text-center">
    <h2><span className=' font-bold '>Name</span> : Jahidul Islam</h2>
    <h2><span className=' font-bold '>Phone</span> : 01879756284</h2>
    <h2><span className=' font-bold '>Email</span> : <a className='underline' href="#">islam15-3879@diu.edu.bd</a></h2>
    <h2><span className=' font-bold '>Linkedin</span> <a className='underline' href="https://www.linkedin.com/in/jahidul-islam-b34999229/">Linkedin</a></h2>
    <h2><span className=' font-bold '>Facebook</span> <a className='underline' href="https://www.facebook.com/jahid.jahid.775823">Facebook</a></h2>
    
    
  </div>
</div>
    <div>
    <div class="card  bg-base-100 shadow-xl">
  
  <div class="card-body">
  <div class="badge text-center font-bold badge-secondary">About me</div>
    <h2 class="card-title">
   
    
      
      <div class="badge badge-secondary">Educational Qualification</div>
    </h2>
    <p>College : Milestone College with gpa 5:00</p>
    <p>Univarsity : Daffodil Internation Univarsity</p>
    <p>Year :3rd running </p>
    <p>Subject :CSE in BSC </p>
    <p>Cgpa : 3.84 current </p>
    <div class="badge badge-secondary">Skills</div>
    <p className='badge text-white badge-primary'>Web developer </p>
    <p>Some live Website Link </p>
    <a href="https://lambent-narwhal-0dfeaf.netlify.app/"><span className='font-bold text-indigo-600'>1:Click here</span></a>
    <a href="https://wild-photograper-services.web.app/"> <span className='font-bold text-indigo-600'>2:Click here</span></a>
    <a href="https://spiffy-semifreddo-f293a1.netlify.app/home"> <span className='font-bold text-indigo-600'>3:Click here</span></a>
    <p className='badge text-white p-3 badge-primary'><span className='text-white font-bold'>My github link  </span>: <a className='underline font-bold ' href="https://github.com/jahidulislam123">click here </a> </p>
    <a href="https://spiffy-semifreddo-f293a1.netlify.app/home"> <span className='font-bold text-indigo-600'>By and large i am able to speack in eanglish with others fluently</span></a>
   
    <div class="card-actions justify-end">
      <div class="badge badge-outline">html ,css,
      bootsrap,tailwind,github all,javascript,react ,node,firebase,mongodb</div> 
      
    </div>
    <p className='badge text-white badge-primary'>Thank you for watching my profile </p>

  </div>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Portfolio;