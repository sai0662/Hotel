import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import data from '../../data';

function HotelScreen(props) {
    const hotel = data.hotels.find(x => x._id === props.match.params.id);
    return (
       
        <div>
            <div>
            <Link to="/">Back Home</Link>
        </div> 
            {hotel.name}
            <div>
                <img src={hotel.image}/>
            </div>
        </div>
    );
}

export default HotelScreen;