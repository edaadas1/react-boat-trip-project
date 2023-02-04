import "../assets/css/Login.css"

const Login = () =>{
    return(
        <>
        <div className="header-and-login">
            <div className="header">Join the <span className="orange-header">fun.</span></div>
            <form className="login-form">
                <h1 className="login-header">Login Here</h1>
                <p>Email :</p>
                <input type="text" placeholder="email"></input>
                <p>Password :</p>
                <input type="password" placeholder="password"></input>
                <p className="forgot-password">Forgot Password?</p>
                <button className="login-button" type="submit">LOGIN</button>
                <p>Don't have an account yet? <span className="signup">Signup now</span></p>
            </form>
        </div>
        </>

    )
}

export default Login