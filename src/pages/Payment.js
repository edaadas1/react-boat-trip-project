import React from "react"
import SecondNavbar from './../components/SecondNavbar';
import "../assets/css/Payment.css"
import Radio from '@mui/material/Radio';
import { FormControlLabel, TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import secureicon from "../assets/images/secure.png"
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PersonIcon from '@mui/icons-material/Person';


const Payment =()=>{

    const [count, setCount] = React.useState(1);
  
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
                    <p className="payment-passenger-count">1 passenger</p>
                    <div className="payment-badge">
                        <Badge color="secondary" badgeContent={count}>
                        <PersonIcon />
                        </Badge>
                        <ButtonGroup>
                        <Button
                            aria-label="reduce"
                            onClick={() => {
                            setCount(Math.max(count - 1, 0));
                            }}
                        >
                            <RemoveIcon fontSize="small" />
                        </Button>
                        <Button
                            aria-label="increase"
                            onClick={() => {
                            setCount(count + 1);
                            }}
                        >
                            <AddIcon fontSize="small" />
                        </Button>
                        </ButtonGroup>
                    </div>

                    </div>
                    <p className="payment-total-price">Total Price : $300</p>
                </div>
                <hr></hr>
                <div className="contact-part">
                    <p>Contact Information</p>
                    <form className="contact-form">
                        <div className="phone-div">
                        <TextField
                            style={{width:500,marginTop:15}}
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Phone Number"
                        />
                        </div>
                        <div className="mail-div">
                        <TextField
                            style={{width:500,marginTop:15}}
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Email"
                        />
                        </div>
                    </form>
                </div>
                <hr></hr>
                <div>
                    <form className="passenger-form">
                    <p>Passenger Information</p>
                        <div className="name-div">
                        <TextField
                            style={{width:500,marginTop:15}}
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="First Name"
                        />
                        </div>
                        <div className="lastname-div">
                        <TextField
                            style={{width:500,marginTop:15}}
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Last Name"
                        />
                        </div>
                        <div className="identity-div">
                        <TextField
                            style={{width:500,marginTop:15}}
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Identity Number"
                        />
                        </div>
                    </form>
                </div>
                <hr></hr>
                <div>
                    <form className="payment-form">
                        <p>Payment Information</p>
                        <FormControlLabel value="bank/credit card" control={<Radio />} label="Bank/credit card" checked />
                        <div className="cardnumber-div">
                        <TextField
                            style={{width:500,marginTop:15}}
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Card Number"
                        />
                        </div>
                        <div className="expire-and-cvc">
                        <div className="expiredate-div">
                        <TextField
                            style={{width:230,marginTop:15}}
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Expire Date"
                        />
                        </div>
                        <div className="cvc-div">
                        <TextField
                            style={{width:230,marginTop:15}}
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="CVC2"
                        />
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