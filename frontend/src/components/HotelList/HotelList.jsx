import React, { useEffect, useState } from "react";
import "./HotelList.css";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from  'axios';
import { useDispatch, useSelector } from "react-redux";
import { listHotels } from "../../actions/hotelActions";
function HotelList() { 
  
 
  const hotelList = useSelector(state => state.hotelList);
  const { hotels,loading, error } = hotelList;
  const dispatch  = useDispatch();

  useEffect(()=>{
  dispatch(listHotels())
    return()=>{
    
    };
  },[])

  return loading ? <div>Loading...</div> :
  error? <div>{error}</div> :
     
          <ul className="hotels">
            {hotels.map(hotel => (
              <li key={hotel._id}>
                <div className="hotel">
                  <img className="hotel-image" src={hotel.image} alt="img" />
                  <div className="hotel-name">{hotel.name}</div>
                  <div className="place">{hotel.place}</div>
                  <div className="price">{hotel.price}</div>
                  <div className="Button">
                    <Link to={'/hotel/' + hotel._id}>
                    <Button  variant="primary">Book Now</Button> 
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
    
  
}

export default HotelList;
