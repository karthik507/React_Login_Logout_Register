import React, { useState } from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate ,Link} from "react-router-dom";
const Resgistration = () => {
  const [id,idchange]=useState("");
  const [name,namechange]=useState("");
  const [password,passwordchange]=useState("");
  const [email,emailchange]=useState("");
  const [phone,phonechange]=useState("");
  const [country,countrychange]=useState("india");
  const [address,addresschange]=useState("");
  const [gender,genderchange]=useState("female");

  const navigate=useNavigate();

  const IsValidate=()=>{
    let isproceed=true;
    let errormsg='Please enter the value in ';
    if(id===null|| id===""){
      isproceed=false;
      errormsg+=' Username'
    }
    if(name===null|| name===""){
      isproceed=false;
      errormsg+=' FullName'
    }
    if(password===null|| password===""){
      isproceed=false;
      errormsg+=' Password'
    }
    if(email===null|| email===""){
      isproceed=false;
      errormsg+=' Email'
    }
    if(!isproceed){
      toast.warning(errormsg)
    }
    return isproceed;
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(IsValidate()){
    let regobj={
      id,name,password,email,phone,country,address,gender
    }
    fetch("http://localhost:8000/user",{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(regobj)
    })
    .then((res)=>{
      toast.success("Registred successfully")
      navigate("/login")
    })
    .catch((err)=>{
      toast.error("Failed: "+err.message)
    })
  }

  }
  return (
    <div className="offset-lg-3 col-lg-6">
      <form onSubmit={handleSubmit} className="container">
        <div  className="card">
          <div className="card-header">
            <h1>User Registration</h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>User Name <span className="errmsg">*</span></label>
                  <input  value={id} onChange={(e)=>{idchange(e.target.value)}} className="form-control"></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Password <span className="errmsg">*</span></label>
                  <input value={password} onChange={(e)=>{passwordchange(e.target.value)}} type='password' className="form-control"></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Full Name <span className="errmsg">*</span></label>
                  <input value={name} onChange={(e)=>{namechange(e.target.value)}} className="form-control"></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Email <span className="errmsg">*</span></label>
                  <input placeholder="email@gmail.com" type="email" value={email} onChange={(e)=>{emailchange(e.target.value)}} className="form-control"></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Phone Number <span className="errmsg">*</span></label>
                  <input value={phone} onChange={(e)=>{phonechange(e.target.value)}} className="form-control"></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Country <span className="errmsg">*</span></label>
                  <select value={country} onChange={(e)=>{countrychange(e.target.value)}} className="form-control">
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="england">England</option>
                  </select>
                  
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Address</label>
                  <textarea value={address} onChange={(e)=>{addresschange(e.target.value)}} className="form-control"></textarea>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Gender</label><br></br>
                  <input type='radio' checked={gender==='male'} onChange={(e)=>{genderchange(e.target.value)}} name='gender' value='male' className="app-check"></input>
                  <label>Male</label>
                  <input type='radio' checked={gender==='female'} onChange={(e)=>{genderchange(e.target.value)}} name='gender' value='female' className="app-check"></input>
                  <label>Female</label>
                </div>
              </div>

              <div></div>
            </div>
          </div>
          
          <div className="card-footer">
            <button id="cardid" type="submit" className="btn btn-primary">
              Register
            </button>
            <Link to='/login' className="btn btn-danger">Back</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Resgistration;
