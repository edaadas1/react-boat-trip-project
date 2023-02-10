import React from "react"
import FirstNavbar from './../components/FirstNavbar';
import FilterBar from './../components/FilterBar';
import "../assets/css/Home.css";
import HomeTourCard from './../components/HomeTourCard';

const Home =()=>{

    return(
        <>
        <div className="home-body">
            <FirstNavbar />
            <div className="home-filter-and-tours">
            <FilterBar />
            <div className="home-tour-container">
                <HomeTourCard></HomeTourCard>
                <HomeTourCard></HomeTourCard>
                <HomeTourCard></HomeTourCard>
            </div>
            </div>
        </div>
        </>
    )
}
export default Home