import React, { useState } from "react"
import SecondNavbar from './../components/SecondNavbar';
import "../assets/css/NewTour.css"
import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {MdCloudUpload,MdDelete} from "react-icons/md"
import { AiFillFileImage } from 'react-icons/ai';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from "@mui/x-date-pickers";


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

    
    const [image,setImage] = useState(null);
    const [fileName,setFileName] = useState("No selected file")


    return(
        <>
        <div className="new-tour-body">
            <SecondNavbar />
             <div className="newtour-card">
                    <form action="" className='file-uploader-form' onClick={()=>document.querySelector(".input-field").click()}>
                        <input type="file" className='input-field' hidden
                        onChange={({target:{files}})=>{
                        files[0] && setFileName(files[0].name)
                        if(files){
                        setImage(URL.createObjectURL(files[0]))
                        }
                        }}
                        />

                        {image ?
                        <img src={image} width={300} height={10} alt={fileName} />
                        :
                        <>
                        <MdCloudUpload color="#147cf" size={60}/>
                        <p>Browse Files to upload</p>
                        </>
                        }
                    </form>

                    <section className='uploaded-row'>
                        <AiFillFileImage color="#1475cf" />
                        <span className='upload-content'>
                        {fileName}
                        <MdDelete
                        onClick={()=>{
                            setFileName("No Selected File")
                            setImage(null)
                        }}
                        />
                        </span>
                    </section>
                    <div className="new-tour-columns">
                        <div className="new-tour-left-column">
                            <form className="newtour-form" onSubmit={(e)=>addTour(e)}>
                            <TextField
                                style={{width:400,marginBottom:20,marginTop:10}}
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="Boat Name"
                                ref={BoatNameInputElement}
                                />
                                <TextField
                                style={{width:400,marginBottom:20}}
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="City"
                                    ref={CityInputElement}
                                />
                                <TextField
                                style={{width:400,marginBottom:20}}
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="District"
                                    ref={DistrictInputElement}
                                />
                                <TextField
                                style={{width:400,marginBottom:20}}
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="Address"
                                    ref={AddressInputElement}
                                />
                                <TextField
                                style={{width:400,marginBottom:20}}
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="Total Capacity"
                                    ref={TotalCapacityInputElement}
                                />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker className="new-tour-picker" label="Select Date" ref={DateInputElement} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </form>
                        </div>
                        <div className="new-tour-right-column">
                        <form className="newtour-form" onSubmit={(e)=>addTour(e)}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimePicker']}>
                            <TimePicker className="new-tour-picker" label="Departure Time" ref={DepartureTimeInputElement} />
                            </DemoContainer>
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimePicker']}>
                            <TimePicker className="new-tour-picker" label="End Time" ref={EndTimeInputElement}/>
                            </DemoContainer>
                        </LocalizationProvider>
            
                                <TextField
                                style={{width:400,marginBottom:20}}
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="Menu"
                                    ref={MenuInputElement}
                                />
                                <TextField
                                style={{width:400,marginBottom:20}}
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="Price Per Person"
                                    ref={PricePerPersonInputElement}
                                />
                                <TextField
                                style={{width:400,marginBottom:20}}
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="Destinations"
                                    ref={DestinationPlacesInputElement}
                                />
                                <TextField
                                style={{width:400,marginBottom:20,marginTop:8}}
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="Contact"
                                    ref={ContactInputElement}
                                />
                            </form>
                        </div>
                    </div>
                    <div className="form-button-part">
                        <Button sx={{mt:2,mb:2}} variant="contained" endIcon={<SendIcon />} type="submit" >
                            ADD TO TOURS
                        </Button>
                    </div>
            </div>
        </div>
        </>
    )
}
export default NewTour