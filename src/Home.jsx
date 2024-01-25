import React from 'react';
import Images from './Images/1.png';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


function Home() {
  return (
    <>
      
    <section id="header">
    <div className="container-fluid ">
        <div className='row'>
            <div className='col-md-12 mx-auto'>
            <div className='row'>
            <div className='col-md-6  '>
              <img src={Images} className='img-fluid rounded-circle' height='700px' width='500px'/>
            </div>
           
            <div className='col-md-6 px-5 flex-column horizonatal-center-row' >
            <div class="container h-100 d-flex justify-content-center">
    <div class="jumbotron my-auto">
            <h2><strong>Hey,</strong> I am web developer  </h2>
            <h5 className='mt-3'>
            I'm Shivam, React web Developer from India.
            I am looking forward to work with your organization.
            </h5>
            <div className='mt-3'>
              <NavLink className='btn btn-danger' to='./contact'>Hire me</NavLink>
            </div>
            </div></div>
            
            </div>
           
            </div>
            </div>
      </div>
    </div>
    </section>
    </>
   
  );
}

export default Home;
