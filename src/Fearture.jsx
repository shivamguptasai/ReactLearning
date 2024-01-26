import {React ,useState,useEffect} from 'react';
import axios from "axios";
import json from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Feature() {
  const resData=[];
  const [data,setData]=useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos'
    )
    .then((response)=>{
      if(response.data.length>0)
      {
      setData(response.data);
     // alert(response.data);;
    }
    else{
      toast.error('Something went wrong!')
    }
    })
    .catch((error)=>{
      alert(error);
    })
    
  }, []);

  return (
    <>
     <div className="container-fluid ">
     <div className='row'>
    {data.map((person, index) => (
     
      <div className='col-md-3 mt-3'>
      <div class="card" >
  <img class="card-img-top" src={person.url} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text">{person.title}</p>
  </div>
</div>
 </div>


    ))}
    </div>
    </div>
    <ToastContainer 
  position="top-center"
  reverseOrder={false}
  />
    </>
  );
}

export default Feature;