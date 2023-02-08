import React from "react"
import SecondNavbar from './../components/SecondNavbar';
import "../assets/css/NewTour.css"
import addboat from "../assets/images/addboat.png"
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const NewTour =()=>{
    return(
        <>
        <div className="new-tour-body">
        <SecondNavbar />
         <div className="newtour-card">
            <img alt="boat img" src={addboat} className="addboat-img"></img>
                <form className="newtour-form">
                <div className="form-items">
                        <label>Boat Name:</label>
                        <input className="form-items-input" placeholder="boat name"></input>
                    </div>
                    <div className="form-items">
                        <label>Location:</label>
                        <input className="form-items-input" type="text" placeholder="location"></input>
                    </div>
                    <div className="form-items">
                        <label>Total Capacity:</label>
                        <input className="form-items-input" type="number" placeholder="total capacity"></input>
                    </div>
                    <div className="form-items">
                        <label>Available Seat Number:</label>
                        <input className="form-items-input" type="number" placeholder="available seat number"></input>
                    </div>
                    <div className="form-items">
                        <label>Date:</label>
                        <input className="form-items-input" type="date"></input>
                    </div>
                    <div className="form-items">
                        <label>Time:</label>
                        <input className="form-items-input" type="time"></input>
                    </div>
                    <div className="form-items">
                        <label>Menu:</label>
                        <input className="form-items-input" type="text" placeholder="menu"></input>
                    </div>
                    <div className="form-items">
                        <label>Price Per Person:</label>
                        <input className="form-items-input" type="number" placeholder="price per person"></input>
                    </div>
                    <div className="form-items">
                        <label>Destination Places:</label>
                        <input className="form-items-input" type="text" placeholder="destination places"></input>
                    </div>
                    <div className="form-button-part">
                        <Button sx={{mt:2,mb:2}} variant="contained" endIcon={<SendIcon />}>
                            ADD TO TOURS
                        </Button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default NewTour