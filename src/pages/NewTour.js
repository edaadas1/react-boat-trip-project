import React from "react"
import SecondNavbar from './../components/SecondNavbar';
import "../assets/css/NewTour.css"
import addboat from "../assets/images/addboat.png"
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

const NewTour =()=>{

    const [boatName,setboatName] = useState("");
    const [location,setLocation] = useState("");
    const [totalCapacity,setTotalCapacity] = useState("");
    const [availableSeatNumber,setAvailableSeatNumber] = useState("");
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const [menu,setMenu] = useState("");
    const [pricePerPerson,setPricePerPerson] = useState("");
    const [destinationPlaces,setDestinationPlaces] = useState("");


    const addTour =(e)=> {
       
        
    }


    return(
        <>
        <div className="new-tour-body">
        <SecondNavbar />
         <div className="newtour-card">
            <img alt="boat img" src={addboat} className="addboat-img"></img>
                <form className="newtour-form">
                <div className="form-items">
                        <label>Boat Name:</label>
                        <input className="form-items-input" placeholder="boat name" value={boatName} onChange={(e)=>setboatName(e.target.value)}></input>
                    </div>
                    <div className="form-items">
                        <label>Location:</label>
                        <input className="form-items-input" type="text" placeholder="location" value={location} onChange={(e)=>setLocation(e.target.value)}></input>
                    </div>
                    <div className="form-items">
                        <label>Total Capacity:</label>
                        <input className="form-items-input" type="number" placeholder="total capacity" value={totalCapacity} onChange={(e)=>setTotalCapacity(e.target.value)}></input>
                    </div>
                    <div className="form-items">
                        <label>Available Seat Number:</label>
                        <input className="form-items-input" type="number" placeholder="available seat number" value={availableSeatNumber} onChange={(e)=>setAvailableSeatNumber(e.target.value)}></input>
                    </div>
                    <div className="form-items">
                        <label>Date:</label>
                        <input className="form-items-input" type="date" value={date} onChange={(e)=>setDate(e.target.value)}></input>
                    </div>
                    <div className="form-items">
                        <label>Time:</label>
                        <input className="form-items-input" type="time" value={time} onChange={(e)=>setTime(e.target.value)}></input>
                    </div>
                    <div className="form-items">
                        <label>Menu:</label>
                        <input className="form-items-input" type="text" placeholder="menu" value={menu} onChange={(e)=>setMenu(e.target.value)}></input>
                    </div>
                    <div className="form-items">
                        <label>Price Per Person:</label>
                        <input className="form-items-input" type="number" placeholder="price per person" value={pricePerPerson} onChange={(e)=>setPricePerPerson(e.target.value)}></input>
                    </div>
                    <div className="form-items">
                        <label>Destination Places:</label>
                        <input className="form-items-input" type="text" placeholder="destination places" value={destinationPlaces} onChange={(e)=>setDestinationPlaces(e.target.value)}></input>
                    </div>
                    <div className="form-button-part">
                        <Button sx={{mt:2,mb:2}} variant="contained" endIcon={<SendIcon />} type="submit" onClick={(e)=>addTour(e)}>
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