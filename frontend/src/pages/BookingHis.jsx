import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBook, removeFromBooking } from "../actions/bookActions";

function BookingHis(props) {
  const book = useSelector((state) => state.book);
  const { bookItems } = book;

  const hotelId = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    if (hotelId) {
      dispatch(addToBook(hotelId));
    }
  });

  const removeFromBookingHandler = (hotelId) => {
    dispatch(removeFromBooking(hotelId));
  }
  return (
    <div className="book">
      <div className="book-list">
        <ul className="book-list-container">
          <li>
            <h3>Hotel Booking</h3>
            <div>Hotel Name</div>
            <div>price</div>
          </li>
          {bookItems.length === 0 ? (
            <div>Booking is empty</div>
          ) : (
            bookItems.map((item) => (
              <li>
                <div className="book-image">
                  <img src={item.image} />
                </div>

                <div className="book-name">
                  <div>{item.name}</div>
                  <button
                    type="button"
                    onClick={() => removeFromBookingHandler(item.hotel)}
                  >
                    Delete
                  </button>
               
                </div>
                <div>{item.price}</div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default BookingHis;
