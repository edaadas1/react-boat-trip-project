import { Slider } from '@mui/material'
import React from 'react'
import "../assets/css/FilterBar.css"
import { useState } from 'react';

const FilterBar = () => {

    const [val,setVal] = useState([0,100]);

    const updateRange =(e,data)=>{
        setVal(data)
    }

    const [date,setDate] = useState();
    const [time,setTime] = useState();


  return (
    <>
            <div className='filter-bar'>
                <h3>FILTER RESULTS</h3>
                <hr></hr>
                <h4>Price Per Person</h4>
                <p className='price-range'>0$ to 100$</p>
                <Slider
                    value={val}
                    onChange={updateRange}
                    valueLabelDisplay="auto"
                    disableSwap
                />
                <hr></hr>
                <h4>Select Departure Day and Time {date} {time}</h4>
                <div className='date-and-time'>
                <input className='date-picker' type="date" onChange={(e)=>setDate(e.target.value)}></input>
                <input className='time-picker' type="time" onChange={(e)=>setTime(e.target.value)}></input>
                </div>
                <hr></hr>
                <h4>Search Location</h4>
                <input type="text" placeholder='search location' className='search-input'></input>

            </div>
    </>
  )
}


export default FilterBar
