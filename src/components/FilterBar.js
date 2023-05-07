import { Slider } from '@mui/material'
import React from 'react'
import "../assets/css/FilterBar.css"
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const FilterBar = () => {

    const [val,setVal] = useState([0,100]);

    const updateRange =(e,data)=>{
        setVal(data)
    }

    const [location, setLocation] = React.useState('');

    const handleChange = (event) => {
      setLocation(event.target.value);
    };
  


  return (
    <>
            <div className='filter-bar'>
                <h3 style={{marginBottom:20,textAlign:"center"}}>FILTER RESULTS</h3>
                <h4 style={{marginBottom:20,marginTop:20}}>Price Per Person</h4>
                <p className='price-range'>0$ to 100$</p>
                <Slider
                    value={val}
                    onChange={updateRange}
                    valueLabelDisplay="auto"
                    disableSwap
                />
                <h4 style={{marginTop:30}}>Departure Day and Time</h4>
                <div className='date-and-time'>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label="Select Date" />
                    </DemoContainer>
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                      <TimePicker label="Select Time" />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                <h4 style={{marginBottom:20,marginTop:30}}>Search Location</h4>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Location</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={location}
                    label="Location"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Marmaris</MenuItem>
                    <MenuItem value={20}>Bodrum</MenuItem>
                    <MenuItem value={30}>Fethiye</MenuItem>
                  </Select>
                </FormControl>

            </div>
    </>
  )
}


export default FilterBar
