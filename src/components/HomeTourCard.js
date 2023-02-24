import React from 'react'
import "../assets/css/HomeTourCard.css";
import thunderbird from "../assets/images/thunderbird.jpg"
import ticket from "../ticket.json"
import Lottie from "lottie-react"

const HomeTourCard = () => {

  return (
    <>
        <div className='tour-card'>
            <div className='tour-card-img-part'>
            <img className='tour-card-img' alt='tourimage' src={thunderbird}></img>
            </div>
            <p className='tour-card-name'>THUNDERBIRD</p>
            <div className='tour-card-info-part'>
                <div className='tour-info-box'>
                    <p>Location:</p>
                    <p className='tour-p'>Mugla/Marmaris</p>
                </div>
                <div className='tour-info-box'>
                    <p>Address:</p>
                    <p className='tour-p'>Kordon sahili kaymakamlık karşısı, 48700 Marmaris/Muğla</p>
                </div>
                <div className='tour-info-box'>
                    <p>Available Seat Number:</p>
                    <p className='tour-p'>100</p>
                </div>
                <div className='tour-info-box'>
                    <p>Date:</p>
                    <p className='tour-p'>18.06.2023</p>
                </div>
                <div className='tour-info-box'>
                    <p>Departure Time:</p>
                    <p className='tour-p'>09:30</p>
                </div>
                <div className='tour-info-box'>
                    <p>End Time:</p>
                    <p className='tour-p'>18:30</p>
                </div>
                <div className='tour-info-box'>
                    <p>Menu:</p>
                    <p className='tour-p'>Fish</p>
                </div>
                <div className='tour-info-box'>
                    <p>Price Per Person:</p>
                    <p className='tour-p'>$ 150</p>
                </div>
                <div className='tour-info-box'>
                    <p>Destination Places:</p>
                    <p className='tour-p'>
                        <ul className='destination-ul'>
                            <li>Kızılkum</li>
                            <li>Akvaryum</li>
                            <li>Fosforlu Mağara</li>
                            <li>Korsan Mağara</li>
                            <li>Kadırga</li>
                            <li>Yeşildeniz</li>
                        </ul>
                    </p>
                </div>
                <div className='tour-info-box'>
                    <p>Contact:</p>
                    <p className='tour-p'>05457473217</p>
                </div>
                <button className='buy-btn' type='submit'>
                    Buy a Ticket
                    <Lottie animationData={ticket} style={{width:"70px"}}></Lottie>
                </button>
            </div>
        </div>
    </>
  )
}

export default HomeTourCard
