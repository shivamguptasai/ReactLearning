import React,{useState} from 'react';
import Images from './Images/2.png';
import axios from "axios";

function ContactUs() {
 const [data,setData]=useState(
  {
    name:'',
    email:'',
    mobile:'',
    message:''
  }
 )

const InputEvent=(event)=>{
  const {name,value}=event.target;
  setData((preVal)=>{
return{
  ...preVal,
  [name]:value,

}
  })
};
  const fromSubmit=(e)=>{
e.preventDefault();
alert('You Name is '+data.name);
const name=data.name;
const email=data.email;
const mobile=data.mobile;
const message=data.message;
axios.post('https://jsonplaceholder.typicode.com/posts'
,{name,email,mobile,message
  })
.then((response)=>{
  alert(response.status);
})
.catch((error)=>{
  alert(error);
})

  };
  return (
    <>

    <section id="header">
    <div className="container-fluid ">
        <div className='row'>
            <div className='col-md-12 mx-auto'>
            <div className='row'>
          <center><h2>Join Us</h2></center>
            <div className='col-md-6 pt-2  border-'>
            <div className="container-fluid border border-dark">
            <form onSubmit={fromSubmit}>
  <div class="form-row pt-2">
  <div class="form-group col-md-4">

      <label for="inputState">Who are You </label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Student</option>
        <option>Recruiter</option>
      </select>
    </div>
  <div class="form-group col-md-6 ">
      <label for="inputinputName">Name</label>
      <input type="name" class="form-control" id="inputName"
      onChange={InputEvent}
      name='name'
      value={data.name}
      placeholder="Enter your name"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4"
       onChange={InputEvent}
      name='email'
      value={data.email}
      placeholder="Email"/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputMobile">Mobile</label>
      <input type="text" class="form-control" id="inputMobile"
         onChange={InputEvent}
      name='mobile'
      value={data.mobile}
      placeholder="Mobile No"
      />
    </div>
  <div class="form-group ">
    <label for="inputMessage">Message</label>
    <textarea type="text" class="form-control" id="inputMessage"
     onChange={InputEvent}
      name='message'
      value={data.message}
    placeholder="Write Something"/>
  </div>



  </div>
<center>
  <button type="submit" class="btn btn-info mt-5 mb-4">Sign in</button>
  <button type="button" class="btn btn-danger mt-5 mb-4 mr-1">Cancel</button>
</center>
</form>

            </div>
            </div>
            <div className='col-md-6 pt-5 '>
              <img src={Images} className='img-fluid' height='700px' width='500px'/>
            </div>

            </div>
            </div>
      </div>
    </div>
    </section>
    </>

  );
}

export default ContactUs;