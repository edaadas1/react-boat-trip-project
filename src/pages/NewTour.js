import React from "react"
import SecondNavbar from './../components/SecondNavbar';
import "../assets/css/NewTour.css"
import addboat from "../assets/images/addboat.png"
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const NewTour =()=>{

    const BoatNameInputElement = useRef();
    const CityInputElement = useRef();
    const DistrictInputElement = useRef();
    const AddressInputElement = useRef();
    const TotalCapacityInputElement = useRef();
    const DateInputElement = useRef();
    const DepartureTimeInputElement = useRef();
    const EndTimeInputElement = useRef();
    const MenuInputElement = useRef();
    const PricePerPersonInputElement = useRef();
    const DestinationPlacesInputElement = useRef();
    const ContactInputElement = useRef();

    const dispatch = useDispatch()

    const addTour =(e)=> {
        e.preventDefault();
        dispatch(addTour({
            boatname:BoatNameInputElement.current?.value,
            city:CityInputElement.current?.value,
            district:DistrictInputElement.current?.value,
            address:AddressInputElement.current?.value,
            totalCapacity:TotalCapacityInputElement.current?.value,
            date:DateInputElement.current?.value,
            departuretime:DepartureTimeInputElement.current?.value,
            endtime:EndTimeInputElement.current?.value,
            menu:MenuInputElement.current?.value,
            pricePerPerson:PricePerPersonInputElement.current?.value,
            destinationPlaces:DestinationPlacesInputElement.current?.value,
            contact:ContactInputElement.current?.value
        }))
     
    }

    const tour = useSelector(state=>state.newtour.tour)
    console.log(tour)

    return(
        <>
        <div className="new-tour-body">
        <SecondNavbar />
         <div className="newtour-card">
            <img alt="boat img" src={addboat} className="addboat-img"></img>
                <form className="newtour-form" onSubmit={(e)=>addTour(e)}>
                <div className="form-items">
                        <label>Boat Name:</label>
                        <input className="form-items-input" placeholder="boat name" ref={BoatNameInputElement}></input>
                    </div>
                    <div className="form-items">
                        <label>City:</label>
                        <input className="form-items-input" type="text" placeholder="city" ref={CityInputElement}></input>
                    </div>
                    <div className="form-items">
                        <label>District:</label>
                        <input className="form-items-input" type="text" placeholder="district" ref={DistrictInputElement} ></input>
                    </div>
                    <div className="form-items">
                        <label>Address:</label>
                        <input className="form-items-input" type="text" placeholder="address" ref={AddressInputElement} ></input>
                    </div>
                    <div className="form-items">
                        <label>Total Capacity:</label>
                        <input className="form-items-input" type="number" placeholder="total capacity" ref={TotalCapacityInputElement}></input>
                    </div>
                    <div className="form-items">
                        <label>Date:</label>
                        <input className="form-items-input" type="date" ref={DateInputElement}></input>
                    </div>
                    <div className="form-items">
                        <label>Departure Time:</label>
                        <input className="form-items-input" type="time" ref={DepartureTimeInputElement} ></input>
                    </div>
                    <div className="form-items">
                        <label>End Time:</label>
                        <input className="form-items-input" type="time" ref={EndTimeInputElement}></input>
                    </div>
                    <div className="form-items">
                        <label>Menu:</label>
                        <input className="form-items-input" type="text" placeholder="menu" ref={MenuInputElement}></input>
                    </div>
                    <div className="form-items">
                        <label>Price Per Person:</label>
                        <input className="form-items-input" type="number" placeholder="price per person" ref={PricePerPersonInputElement}></input>
                    </div>
                    <div className="form-items">
                        <label>Destination Places:</label>
                        <input className="form-items-input" type="text" placeholder="destination places" ref={DestinationPlacesInputElement}></input>
                    </div>
                    <div className="form-items">
                        <label>Contact:</label>
                        <input className="form-items-input" type="text" placeholder="contact" ref={ContactInputElement}></input>
                    </div>
                    <div className="form-button-part">
                        <Button sx={{mt:2,mb:2}} variant="contained" endIcon={<SendIcon />} type="submit" >
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