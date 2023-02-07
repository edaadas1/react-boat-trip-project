import "../assets/css/SignUp.css"
import { useNavigate } from 'react-router-dom';
import { login } from './../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SignUp = () =>{

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const loginHere=()=>{
        navigate("/Login")
    }

    const [name,setName] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmpassword] = useState("");
    const [phone,setPhone] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        dispatch(login(localStorage.setItem("user",JSON.stringify({
            name:name,
            lastname:lastname,
            email:email,
            password:password,
            confirmpassword:confirmpassword,
            phone:phone,
            loggedIn:true
        }))))
        
        navigate("/")
    }

    return(
        <>
       
        <div className="signup-body">
            <div className="signup-card">
                <h1 className="signup-header">Sign up</h1>
                <p>Already have an account? <span className="login-here" onClick={loginHere}>Login here</span> </p>

                <form className="leftside-and-rightside">
                <div className="left-side">
                <p>Name :</p>
                <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <p>Last Name :</p>
                <input type="text" placeholder="last name" value={lastname} onChange={(e)=>setLastname(e.target.value)} ></input>
                <p>Email :</p>
                <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
                </div>

                <div className="right-side">
                <p>Password :</p>
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
                <p>Confirm Password :</p>
                <input type="password" placeholder="confirm password" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}></input>
                <p>Phone Number :</p>
                <input type="text" placeholder="phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
                </div>
                </form>
           
                <button className="submit-button" type="submit" onClick={(e)=>submit(e)}>SUBMIT</button>

            </div>
        </div>
        </>

    )
}

export default SignUp