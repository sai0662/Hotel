import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { detailsHotel } from "../actions/hotelActions";

function HotelScreen(props) {
  const [qty, setQty] = useState(1);
  /* const hotel = data.hotels.find(x => x._id === props.match.params.id);*/
  const hotelDetails = useSelector((state) => state.hotelDetails);
  const { hotel, loading, error } = hotelDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsHotel(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handleAddtobook = () => {
    props.history.push("/book/" + props.match.params.id);
  };
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <form noValidate>
    <div className="details">
      <div className="details-image">
        <img src={hotel.image} alt="hotel"></img>
      </div>

      <div className="details-action">
        <ul>
          <li>Price: {hotel.price}</li>
          <li>
            Status: {hotel.countInStock > 0 ? "In Stock" : "Unavailable."}
          </li>
          <li>
            Qty:{" "}
            <select
              value={qty}
              onChange={(e) => {
                setQty(e.target.value);
              }}
            >
              {[...Array(hotel.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </li>
          <div className="Button">
            <Button onClick={handleAddtobook} variant="primary">
              Book Now
            </Button>
          </div>
        </ul>
      </div>
    </div>
    </form>
  );
}

export default HotelScreen;
