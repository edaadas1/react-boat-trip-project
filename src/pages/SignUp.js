import "../assets/css/SignUp.css"
import { useNavigate } from 'react-router-dom';
import UserInfo from "../components/userInfo"

const SignUp = () =>{

    const navigate = useNavigate();

    const loginHere=()=>{
        navigate("/Login")
    }

    const submit=()=>{
        navigate("/")
    }


    return(
        <>
       
        <div className="signup-body">
            <div className="signup-card">
                <h1 className="signup-header">Sign up</h1>
                <p>Already have an account? <span className="login-here" onClick={loginHere}>Login here</span> </p>

                <UserInfo />
           
            <button className="submit-button" type="submit" onClick={submit}>SUBMIT</button>

            </div>
        </div>
        </>

    )
}

export default SignUp