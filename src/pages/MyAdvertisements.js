import React from "react"
import SecondNavbar from "../components/SecondNavbar"
import "../assets/css/MyAdvertisements.css"
import MyAdvertisementsCard from "../components/MyAdvertisementsCard"

const MyAdvertisements =()=>{
    return(
        <>
        <div className="my-advertisements-body">
            <SecondNavbar></SecondNavbar>
            <div className="my-advertisements-cards-part">
                <MyAdvertisementsCard></MyAdvertisementsCard>
                <MyAdvertisementsCard></MyAdvertisementsCard>
                <MyAdvertisementsCard></MyAdvertisementsCard>
            </div>
        </div>
        </>
    )
}
export default MyAdvertisements