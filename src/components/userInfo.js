import React from "react"
import "../assets/css/UserInfo.css"

const UserInfo =()=>{

    return(
        <>
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
        </>
    )
}
export default UserInfo