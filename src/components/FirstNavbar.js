import React from "react"
import "../assets/css/FirstNavbar.css"
import CruiseTrip from "../assets/images/CruiseTrip.png"
import { useNavigate } from 'react-router-dom';
import login from "../login.json"
import Lottie from "lottie-react"

const FirstNavbar =()=> {

    const navigate = useNavigate();

    const userLogin=()=>{
        navigate("/Login")
    }

    const addTour=()=>{
        navigate("/NewTour")
    }

    return(
        <>
            <div className="first-navbar">
                <div className="first-navbar-img-part">
                <img className="first-navbar-img" alt="cruiseLogo" src={CruiseTrip}></img>
                </div>
                <div className="first-navbar-btn-part">
                <button className="first-navbar-add-tour-btn" onClick={addTour}>ADD A NEW TOUR</button>
                <button className="first-navbar-login-btn" onClick={userLogin}>LOGIN
                <Lottie animationData={login} style={{width:"30px"}} className="logout-icon-btn" ></Lottie>
                </button>
                </div>
            </div>
        </>
    )
}

export default FirstNavbar