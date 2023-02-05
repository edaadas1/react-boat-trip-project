import React from "react"
import "../assets/css/Profile.css"
import usericon from "../usericon.json"
import Lottie from "lottie-react"
import UserInfo from './../components/userInfo';
import { useNavigate } from 'react-router-dom';

const Profile =()=>{

    const navigate = useNavigate();

    const advertisements=()=>{
        navigate("/MyAdvertisements")
    }

    return(
        <>
        <div className="profile-body">
            <div className="profile-card">
                <div className="profile-header-part">
                    <div className="profile-header-and-button">
                        <h2 className="profile-header">USER NAME</h2>
                        <button className="profile-myAdvertisements-button" onClick={advertisements}>My Advertisements</button>
                    </div>
                    <div className="profile-picture">
                        <Lottie animationData={usericon} style={{width:"70px"}}></Lottie>
                        <button className="profile-picture-button">Add a Profile Picture</button>
                    </div>
                </div>

                <hr className="space"></hr>

                <h4>Edit Your Personal Information</h4>

                <UserInfo />

                <div className="profile-btn-container">
                <button className="profile-save-btn">SAVE</button>
                </div>

            </div>
        </div>
        </>
    )
}
export default Profile