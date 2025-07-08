import { Link } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import AuthService from "../services/AuthService";
import Swal from "sweetalert2";

export default function ForgotPassword(){
    const [email,setEmail]=useState("");

    const change=(event)=>setEmail(event.target.value);

    const submit=async ()=>{
        try{
        const obj=await AuthService.forgotPassword(email);
        console.log(obj);
        console.log("Password Recovered Successfully");
        Swal.fire("Your Password",obj.data.password,"info");
        }catch(error){
            if(error.response){
                Swal.fire("Server Error",`${error.response.status}`,"error");
            }else if(error.request){
                Swal.fire("Network Error","Server not responding or not running","error");
            }else{
                Swal.fire("Error",`${error.message}`,"error");
            }
        }
    };
    return(
        <>
        <Header/>
        <div className="container mt-5">
        <div className="row">
            <div className="col-5 offset-3">
            <h1>Password Recovery</h1>
        <form>
            <div className="form-group">
                Email Id
                <input type="text" className="form-control" name="email" onChange={change}/>
            </div>            
            <div className="form-group mt-3 mb-3 float-end">
                <button type="button" className="btn btn-primary" onClick={submit}>Submit</button>
            </div>
            <div className="form-group mt-3 mb-3">
                <Link to="/login">Back to Login</Link>                
            </div>
        </form>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    );
}