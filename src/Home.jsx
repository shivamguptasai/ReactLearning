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
            <div className='col-md-6 pt-5 '>
              <img src={Images} className='img-fluid' height='700px' width='500px'/>
            </div>
           
            <div className='col-md-6 px-5 flex-column'>
            
            <h1><strong>Welcome</strong> to React learning  </h1>
            <h3 className='mt-3'>
              I  am a web developer stduying and learning using React.
            </h3>
            <div className='mt-3'>
              <NavLink className='btn btn-danger' to='./contact'>Join Us</NavLink>
            </div>
         
            
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
