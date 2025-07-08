import axios from "axios"; //Communicates with Backend REST APIs/EndPoints

const URL="https://localhost:7286/api/Authentications";
class AuthService{
    async login(email,password){
        return axios.post(URL+"/login",{EmailId:email,Password:password}); //returns set of Logins in form of array   
    }
    async forgotPassword(email){
        return axios.post(URL+"/fpassword",{EmailId:email});
    }
    async signup(login){
        console.log(login)
        return axios.post(URL+"/signup",login);
    }
    async changePassword(email,password){
        return axios.post(URL+"/change",{EmailId:email,Password:password}); //returns set of Logins in form of array   
    }
    // getStud(id){
    //     return axios.get(URL+"/"+id);
    // }
    // updateStud(stud,id){
    //     return axios.put(URL+"/"+id,stud);
    // }
    // deleteStud(id){
    //     return axios.delete(URL+"/"+id);
    // }
}
export default new AuthService()