import { Link, useNavigate } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import AuthService from "../services/AuthService";
import Swal from "sweetalert2";
import * as yup from 'yup';

export default function AdminLogin(){
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [errors,setErrors]=useState({});
    const navigate=useNavigate("");
    const schema=yup.object().shape({
        email:yup.string().email("Invalid Email").required("Email is required"),
        pass:yup.string().required("Password is required")
    });

    const validateLogin=async (e)=>{
        e.preventDefault(); //Don't submit form to server, I am going to submit        
            schema.validate({email,pass},{abortEarly:false})
            .then(async()=>{
                setErrors({}); //No Errors
        try{
            let result=await AuthService.login(email,pass);
        if(result.data){
            localStorage.setItem("user",email);
            navigate("/");
        }
        else
        {
            if(localStorage.getItem("user")) //null or undefined==> false
            localStorage.removeItem("user");
            Swal.fire("Login","Login Failed","error");
        }
        }catch(error){
            if(error.response){
                Swal.fire("Server Error",`${error.response.status}`,"error");
            }else if(error.request){
                Swal.fire("Network Error","Server not responding or not running","error");
            }else{
                Swal.fire("Error",`${error.message}`,"error");
            }
        }
    })
      .catch((err)=>{
        const errobj={}; //{"email":"errormessage", "pass":"errormessage"}
        err.inner.forEach(e=>{
            errobj[e.path]=e.message; //errobj["email"]="error message"
        });
        setErrors(errobj);
      });        
    };
    const changeEmail=(event)=>{
        setEmail(event.target.value);
    };
    const changePass=(event)=>{
        setPass(event.target.value);
    };
    return(
        <>
        <Header/>
        <div className="container mt-5">
            <div className="row">
                <div className="col-5 offset-3">
            <h1>Login</h1>
        <form method="Post" onSubmit={validateLogin} noValidate>
            <div className="form-group">
                Email Id
                <input type="text" className="form-control" name="emial" onChange={changeEmail}/>
                {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
            </div>
            <div className="form-group">
                Password
                <input type="password" className="form-control" name="pass" onChange={changePass}/>
                {errors.pass && <p style={{color:'red'}}>{errors.pass}</p>}
            </div>
            <div className="form-group mt-3 mb-3 float-end">
                <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <div className="form-group mt-3 mb-3">
                <Link to="/signup">Signup</Link><br/>
                <Link to="/forgot">Forgot Password</Link>
            </div>
        </form>
        </div>
        </div>
        </div>
        <Footer/>
        </>
    );
}