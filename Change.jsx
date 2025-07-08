import { useState } from "react";
import AuthService from "../services/AuthService";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

export default function Change(){
    const [pass, setPass]=useState("");
    const [cpass,setCPass]=useState("");

    const changePassword=async ()=>{
        let email=localStorage.getItem("user");
        let result=await AuthService.changePassword(email,pass);
        if(result.data){
            Swal.fire("Change Password","Password Changed Successfully","success");
        }
        else
        {
            Swal.fire("Change Password","Password Change Failed","error");
        }
    };    
    const changePass=(event)=>{
        setPass(event.target.value);
    };
    const changeCPass=(event)=>{
        setCPass(event.target.value);
    }
    return(
        <>
        <Header/>
        <div className="container mt-5">
            <div className="row">
                <div className="col-5 offset-3">
            <h1>Change Password</h1>
        <form>            
            <div className="form-group">
                Password
                <input type="password" className="form-control" name="pass" onChange={changePass}/>
            </div>
            <div className="form-group">
                Confirm Password
                <input type="password" className="form-control" name="cpass" onChange={changeCPass}/>
            </div>
            <div className="form-group mt-3 mb-3 float-end">
                <button type="button" onClick={changePassword} className="btn btn-primary">Submit</button>
            </div>            
        </form>
        </div>
        </div>
        </div>
        <Footer/>
        </>
    );    
}
