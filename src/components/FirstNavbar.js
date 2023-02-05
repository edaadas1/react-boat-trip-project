import React from "react"
import "../assets/css/FirstNavbar.css"
import CruiseTrip from "../assets/images/CruiseTrip.png"
import { useNavigate } from 'react-router-dom';

const FirstNavbar =()=> {

    const navigate = useNavigate();

    const login=()=>{
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
                <button className="first-navbar-login-btn" onClick={login}>LOGIN</button>
                </div>
            </div>
        </>
    )
}

export default FirstNavbar