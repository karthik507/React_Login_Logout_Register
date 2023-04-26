import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
const Login = () => {
  const [username,usernameupdate]=useState("");
  const [password,passwordupdate]=useState("");

  const navigate=useNavigate();

  useEffect(()=>{
    sessionStorage.clear();
  },[])

  const IsValidate=()=>{
    let result=true;
    if(username===null || username===""){
      result =false;
      toast.warning("Please Enter Username")
    }
    if(password===null || password===""){
      result =false;
      toast.warning("Please Enter Password")
    }
    return result;
  }

  const proceedLogin=(e)=>{
    e.preventDefault();
    if(IsValidate()){
      //console.log("proceed")
      fetch("http://localhost:8000/user/"+username)
      .then((res)=>{
        return res.json();
      })
      .then((res)=>{
        console.log(res);
        if(Object.keys(res).length===0){
          toast.error("please Enter valid username")
        }
        else{
          if(res.password===password){
            toast.success("Success");
            sessionStorage.setItem("username",username)
            navigate("/")
          }
          else{
            toast.error("Please Enter valid password")
          }
        }
      })
      .catch((err)=>{
        console.log(err);
        toast.error("Falied due to :"+err.message)
      })
    }
  }
  return (
    <div className='row'>
      <div className='offset-lg-3 col-lg-6'> 
        <form onSubmit={proceedLogin} className='container'>
          <div className='card'>
            <div className='card-header'>
              <h2>User Login</h2>
            </div>
            <div className='card-body'>
              <div className='form-group'>
                <label>User Name <span className='errmsg'>*</span></label>
                <input value={username} onChange={(e)=>{usernameupdate(e.target.value)}} className='form-control'></input>
              </div>
            </div>
            <div className='card-body'>
              <div className='form-group'>
                <label>Password <span className='errmsg'>*</span></label>
                <input type="password" value={password} onChange={(e)=>{passwordupdate(e.target.value)}} className='form-control'></input>
              </div>
            </div>
            <div className='card-footer'>
              <button id='cardid' type='submit' className='btn btn-primary'>Login</button>
              <Link className='btn btn-success' to={'/register'}>New User</Link>
            </div>
            </div> 

        </form>
      </div>
      
    </div>
  )
}

export default Login