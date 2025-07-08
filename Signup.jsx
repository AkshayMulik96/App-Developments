import { Link, useNavigate } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AuthService from "../services/AuthService";
import Swal from "sweetalert2";
import * as Yup from 'yup'
import { ErrorMessage, Form, Field, Formik } from "formik";

export default function Signup(){    
    const validationSchema = Yup.object({
    //Validation Schema
    name: Yup.string().required("Name is required"),
    mobile: Yup.string().matches(/^\d{10}$/, "Invalid mobile").required("Mobile is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    pass: Yup.string().min(5,"Min 5 characters").required("Password is required"),
    pass2: Yup.string().oneOf([Yup.ref("pass")], "Password must match").required("Confirm password required"),
    });
    const navigate=useNavigate();

    return(
        <>
        <Header/>
        <div className="container mt-5">
            <div className="row">
                <div className="col-5 offset-3">
            <h1>Signup</h1>
        <Formik
        initialValues={{name: "", mobile: "", email: "", pass: "", pass2: ""}}
        validationSchema={validationSchema}
        onSubmit={async(values) => {
            console.log("Form Values:", values);
                //you can use axios.post() here
            try{
            const signup={name:values.name,mobileNo:values.mobile,emailId:values.email,password:values.pass};
            console.log(signup);
            const obj=await AuthService.signup(signup);
            console.log(obj);
            console.log("Signup Successfully");
            localStorage.setItem("user",values.email);
            navigate("/");        
            }catch(error){
                if(error.response){
                    Swal.fire("Server Error",`${error.response.status}`,"error");
                }else if(error.request){
                    Swal.fire("Network Error","Server not responding or not running","error");
                }else{
                    Swal.fire("Error",`${error.message}`,"error");
                }
            }
        }}>
        { ()=>(
        <Form className="col-5">
            <div className="form-group">
                Name
                <Field name="name" className="form=control"/>
                <ErrorMessage name="name" component="div" className="text-danger"/>
            </div>
            <div className="form-group">
                Email Id
                <Field name="email" className="form=control"/>
                <ErrorMessage name="email" component="div" className="text-danger"/>
            </div>
            <div className="form-group">
                Mobile No
                <Field name="mobile" className="form=control"/>
                <ErrorMessage name="mobile" component="div" className="text-danger"/>
            </div>
            <div className="form-group">
                Password
                <Field name="pass" type="password" className="form=control"/>
                <ErrorMessage name="pass" component="div" className="text-danger"/>
            </div>
            <div className="form-group">
                Confirm Password
                <Field name="pass2" type="password" className="form=control"/>
                <ErrorMessage name="pass2" component="div" className="text-danger"/>
            </div>
            <div className="form-group mt-3 mb-3 float-end">
                <button type="submit" className="btn btn-primary mt-3">Signup</button>
            </div>
            <div className="form-group mt-3 mb-3">
                <Link to="/login">Back to Login</Link><br/>
                
            </div>
            
        </Form>
        )}
        </Formik>
        </div>
        </div>
        </div>
        <Footer/>
        </>
    );
}