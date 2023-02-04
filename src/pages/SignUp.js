import "../assets/css/SignUp.css"

const SignUp = () =>{
    return(
        <>
            <div className="signup-card">
                <h1 className="signup-header">Sign up</h1>
                <p>Already have an account? <span className="login-here">Login here</span> </p>


            <div className="leftside-and-rightside">
                <div className="left-side">
                <p>Name :</p>
                <input type="text" placeholder="name"></input>
                <p>Last Name :</p>
                <input type="text" placeholder="last name"></input>
                <p>Email :</p>
                <input type="email" placeholder="email"></input>
                </div>

                <div className="right-side">
                <p>Password :</p>
                <input type="password" placeholder="password"></input>
                <p>Confirm Password :</p>
                <input type="password" placeholder="confirm password"></input>
                <p>Phone Number :</p>
                <input type="text" placeholder="phone number"></input>
                </div>
            </div>

            <button className="submit-button" type="submit">SUBMIT</button>

            </div>
        </>

    )
}

export default SignUp