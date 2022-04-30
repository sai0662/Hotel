import Axios from "axios"
import { BOOK_ADD_ITEM, BOOK_REMOVE_ITEM } from "../constants/bookConstants";

const addToBook = (hotelId) => async (dispatch) =>{
    try{
        const {data} = await Axios.get("/api/hotels/" + hotelId);
        dispatch({type: BOOK_ADD_ITEM, payload:{
            hotel : data._id,
            name:data.name,
            image:data.image,
            place:data.place,
            price:data.price,
        }})
    }
    catch{

    }
}

const removeFromBooking = (hotelId) =>(dispatch) => {
    dispatch({type : BOOK_REMOVE_ITEM, payload: hotelId});
}
export {addToBook, removeFromBooking};