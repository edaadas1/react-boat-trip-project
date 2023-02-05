import "../assets/css/Login.css";
import {useNavigate} from "react-router-dom";

const Login = () =>{

    const navigate = useNavigate();

    const login=()=>{
        navigate("/")
    }

    const signup=()=>{
        navigate("/SignUp")
    }

    return(
        <>
        <div className="login-body"> 
            <div className="header-and-login">
                <div className="header">Join the <span className="orange-header">fun.</span></div>
                <form className="login-form">
                    <h1 className="login-header">Login Here</h1>
                    <p>Email :</p>
                    <input type="text" placeholder="email"></input>
                    <p>Password :</p>
                    <input type="password" placeholder="password"></input>
                    <p className="forgot-password">Forgot Password?</p>
                    <button className="login-button" type="submit" onClick={login}>LOGIN</button>
                    <p>Don't have an account yet? <span className="signup" onClick={signup}>Signup now</span></p>
                </form>
            </div>
        </div>
        </>

    )
}

export default Login