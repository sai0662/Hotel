import React, { useEffect, useState } from "react";
import "./HomeScreen.css";
import {Link} from 'react-router-dom';
import axios from  'axios';

function HomeScreen() { 
  const [hotels,setHotel] = useState([]);
 
  useEffect(()=>{
    const fetchData = async()=>{
      const {data} = await axios.get("/api/hotels");
      setHotel(data);
    }
    fetchData();
    return()=>{
    
    };
  },[])

  return (
   <div>
          <ul className="hotels">
            {hotels.map(hotel => (
              <li key={hotel._id}>
                <div className="hotel">
                  <img className="hotel-image" src={hotel.image} alt="img" />
                  <div className="hotel-name">{hotel.name}</div>
                  <div className="place">{hotel.place}</div>
                  <div className="price">{hotel.price}</div>
                  <div className="button">
                    <Link to={'/hotel/' + hotel._id}>
                      {hotel.name}
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
    </div>
  );
}

export default HomeScreen;
