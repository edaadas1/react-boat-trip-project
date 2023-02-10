import React from "react"
import SecondNavbar from './../components/SecondNavbar';
import "../assets/css/Payment.css"
import usericon from "../assets/images/user_icon.png"
import Radio from '@mui/material/Radio';
import { FormControlLabel } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import secureicon from "../assets/images/secure.png"

const Payment =()=>{
    return(
        <>
        <div className="payment-body">
            <SecondNavbar></SecondNavbar>
            <div className="payment-card">
                <div className="tour-info-part">
                    <h3 className="tour-name">THUNDERBIRD</h3>
                    <p className="tour-time">09:30</p>
                    <p className="tour-date">29 October Thursday</p>
                </div>
                <div className="passenger-number-part">
                    <div className="passenger-icon-and-counter">
                    <img className="passenger-icon" alt="user-icon" src={usericon} width="30px"></img>   
                    <p className="payment-passenger-count">1 passenger</p>
                    <input className="passenger-count-input" type="number" defaultValue={1} ></input>
                    </div>
                    <p className="payment-total-price">Total Price : $300</p>
                </div>
                <hr></hr>
                <div className="contact-part">
                    <p>Contact Information</p>
                    <form className="contact-form">
                        <div className="phone-div">
                        <label>Phone Number:</label>
                        <input className="payment-page-input" type="text" placeholder="phone number"></input>
                        </div>
                        <div className="mail-div">
                        <label>E-mail:</label>
                        <input className="payment-page-input" type="email" placeholder="e-mail"></input>
                        </div>
                    </form>
                </div>
                <hr></hr>
                <div>
                    <form className="passenger-form">
                    <p>Passenger Information</p>
                        <div className="name-div">
                        <label>First Name:</label>
                        <input className="payment-page-input" type="text" placeholder="first name"></input>
                        </div>
                        <div className="lastname-div">
                        <label>Last Name:</label>
                        <input className="payment-page-input" type="text" placeholder="last name"></input>
                        </div>
                        <div className="identity-div">
                        <label>Identity Number:</label>
                        <input className="payment-page-input" type="text" placeholder="identity number"></input>
                        </div>
                    </form>
                </div>
                <hr></hr>
                <div>
                    <form className="payment-form">
                        <p>Payment Information</p>
                        <FormControlLabel value="bank/credit card" control={<Radio />} label="Bank/credit card" checked />
                        <div className="cardnumber-div">
                        <label>Card Number:</label>
                        <input className="payment-page-input" type="text" placeholder="card number"></input>
                        </div>
                        <div className="expire-and-cvc">
                        <div className="expiredate-div">
                        <label>Expire Date:</label>
                        <input className="payment-page-input" type="text" placeholder="expire date"></input>
                        </div>
                        <div className="cvc-div">
                        <label>CVC2:</label>
                        <input className="payment-page-input" type="text" placeholder="CVC2"></input>
                        </div>
                        </div>

                        <div className="box-and-text">
                        <Checkbox />
                        <p>I have read and approved the <span className="payment-condition-forms">preliminary information form</span>  and the <span className="payment-condition-forms">distance sales contract</span>. </p>
                        </div>
                        <Button size="large" sx={{mt:2,mb:2}} variant="contained" endIcon={<SendIcon />} type="submit">
                            <img alt="secure-icon" src={secureicon} width="20px"></img> 
                            <p className="payment-btn-text">Make Secure Payment</p>
                        </Button>
                    </form>
                </div>



            </div>
        </div>
        </>
    )
}
export default Payment