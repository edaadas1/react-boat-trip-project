import React from "react"
import "../assets/css/SecondNavbar.css"
import CruiseTrip from "../assets/images/CruiseTrip.png"
import { useNavigate } from 'react-router-dom';
import logout from "../logout.json"
import Lottie from "lottie-react"

const SecondNavbar =()=> {

    const navigate = useNavigate();

    const backTours=()=>{
        navigate("/")
    }

    const userLogout=()=>{
        navigate("/Login")
    }

    return(
        <>
            <div className="second-navbar">
                <div className="second-navbar-img-part">
                <img className="second-navbar-img" alt="cruiseLogo" src={CruiseTrip}></img>
                </div>
                <div className="second-navbar-btn-part">
                <button className="second-navbar-back-tours-btn" onClick={backTours}>BACK TO TOURS</button>
                <div className="second-navbar-user-part">
                    <p className="second-navbar-user-name">Hİ,USER</p>
                    <Lottie animationData={logout} style={{width:"30px"}} className="logout-icon-btn" onClick={userLogout}></Lottie>
                </div>
                </div>
            </div>
        </>
    )
}

export default SecondNavbar