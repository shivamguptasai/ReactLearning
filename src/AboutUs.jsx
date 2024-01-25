import {React ,useState,useEffect} from 'react';
import axios from "axios";


function AboutUs() {
  const resData=[];
  const [data,setData]=useState([])
  useEffect(() => {
    axios.get('https://api.github.com/users'
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
     
    <div className="container mt-2 d-flex justify-content-center align-items-center">       
             <div className="card">
              <div className="upper">
                <img src={person.avatar_url} className="img-fluid" />             
              </div>
              <div className="user text-center">
                <div className="profile">
                  <img src={person.avatar_url} className="rounded-circle" width="50"/>                 
                </div>
              </div>
            <div className="mt-5 text-center">
                <h4 className="mb-0">{person.login}</h4>
                <span className="text-muted d-block mb-2">{person.id}</span>
                <div className="d-flex justify-content-between align-items-center mt-4 px-4">
                  <div className="stats">
                    <h6 className="mb-0">Followers</h6>
                    <span>{person.type}</span>
                  </div>
                  <div className="stats">
                    <h6 className="mb-0">Projects</h6>
                    <span>{person.id}</span>
                  </div>
                <div class="stats">
                    <h6 class="mb-0">Ranks</h6>
                    <span>{person.site_admin}</span>
                  </div>                
                </div>               
              </div>             
             </div>
           </div>
           ))}
           </div>
           </div>
    </>
  );
}

export default AboutUs;