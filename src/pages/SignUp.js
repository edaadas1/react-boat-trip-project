import "../assets/css/SignUp.css"
import { useNavigate } from 'react-router-dom';
import { login } from './../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const SignUp = () =>{

    const navigate = useNavigate();

    const loginHere=()=>{
        navigate("/Login")
    }

    const NameInputElement = useRef();
    const LastNameInputElement = useRef();
    const EmailInputElement = useRef();
    const PasswordInputElement = useRef();
    const ConfirmPasswordInputElement = useRef();
    const PhoneInputElement = useRef();

    const user = useSelector(state=>state.user.user);

    var config = {
        headers : {'Content-Type':'application/x-www-form-urlencoded'}
    };

    const dispatch = useDispatch();
    
    const handleSubmit=(e)=>{
        e.preventDefault();


        if(NameInputElement.current.value && LastNameInputElement.current.value && EmailInputElement.current.value && PasswordInputElement.current.value && ConfirmPasswordInputElement.current.value && PhoneInputElement.current.value){
            if(PasswordInputElement.current.value.length>=8){
                if(PasswordInputElement.current.value===ConfirmPasswordInputElement.current.value){
                    
                    const obj = {
                        name:NameInputElement.current?.value,
                        lastname:LastNameInputElement.current?.value,
                        email:EmailInputElement.current?.value,
                        password:PasswordInputElement.current?.value,
                        confirmpassword:ConfirmPasswordInputElement.current?.value,
                        phone:PhoneInputElement.current?.value,
                        loggedIn:true
                    }
                    
                    axios.post("http://localhost:80/react-boat-project/addUser.php",obj,config).then(response=>{
                        console.log(response)
                    }).catch(error=>{
                        console.log("hata oluştu")
                    }) 
                    // navigate("/")        dispatch(login(obj));
                 }
                else{
                    alert("Passwords are not the same!");
                }
            }
            else{
                alert("Password must be at least 8 caharacters")
            }
        }
        else{
            alert("All fields must be filled")
        } 
        
    }

       
    return(
        <>
       
        <div className="signup-body">
            <div className="signup-card">
                <h1 className="signup-header">Sign up</h1>
                <p>Already have an account? <span className="login-here" onClick={loginHere}>Login here</span> </p>

                <form className="signup-form-items" onSubmit={(e)=>{handleSubmit(e)}}>
                    <div className="leftside-and-rightside">
                    <div className="left-side">
                    <p>Name :</p>
                    <input type="text" placeholder="name" name="name" ref={NameInputElement} ></input>
                    <p>Last Name :</p>
                    <input type="text" placeholder="last name" ref={LastNameInputElement} ></input>
                    <p>Email :</p>
                    <input type="email" placeholder="email" ref={EmailInputElement} ></input>
                    </div>

                    <div className="right-side">
                    <p>Password :</p>
                    <input type="password" placeholder="password" ref={PasswordInputElement} ></input>
                    <p>Confirm Password :</p>
                    <input type="password" placeholder="confirm password" ref={ConfirmPasswordInputElement} ></input>
                    <p>Phone Number :</p>
                    <input type="text" placeholder="phone number" ref={PhoneInputElement} ></input>
                    </div>
                    </div>
                    <div className="signup-btn-box">
                    <button className="signup-submit-button" type="submit">SUBMIT</button>
                    </div>
                </form>

            </div>
        </div>
        </>

    )
}

export default SignUp