import "../assets/css/Profile.css"
import usericon from "../usericon.json"
import Lottie from "lottie-react"
import { useNavigate } from 'react-router-dom';

const Profile =()=>{

    const navigate = useNavigate();
  
    const advertisements=()=>{
        navigate("/MyAdvertisements")
    }

    const user = JSON.parse(localStorage.getItem("user"))

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

                <form className="leftside-and-rightside">
                <div className="left-side">
                <p>Name :</p>
                <input type="text" placeholder="name" value={user.name} ></input>
                <p>Last Name :</p>
                <input type="text" placeholder="last name" value={user.lastname}></input>
                <p>Email :</p>
                <input type="email" placeholder="email" value={user.email}></input>
                </div>

                <div className="right-side">
                <p>Password :</p>
                <input type="text" placeholder="password" value={user.password}></input>
                <p>Confirm Password :</p>
                <input type="text" placeholder="confirm password" value={user.confirmpassword}></input>
                <p>Phone Number :</p>
                <input type="text" placeholder="phone number" value={user.phone}></input>
                </div>
                </form>

                <div className="profile-btn-container">
                <button className="profile-save-btn">SAVE</button>
                </div>

            </div>
        </div>
        </>
    )
}
export default Profile