import {React ,useState,useEffect} from 'react';
import axios from "axios";
import json from "react";


function Feature() {
  const resData=[];
  const [data,setData]=useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos'
    )
    .then((response)=>{
      setData(response.data);
     // alert(response.data);;
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
    </>
  );
}

export default Feature;