import { HOTEL_DETAILS_FAIL, HOTEL_DETAILS_REQUEST, HOTEL_DETAILS_SUCCESS, HOTEL_LIST_FAIL, HOTEL_LIST_REQUEST, HOTEL_LIST_SUCCESS } from "../constants/hotelConstants"
import axios from "axios";

const listHotels = () => async (dispatch) => {
    try{
        dispatch({type : HOTEL_LIST_REQUEST});
        const {data} = await axios.get("/api/hotels");
        dispatch({type: HOTEL_LIST_SUCCESS, payload : data});
    }
    
    catch(error){
       
        dispatch({type: HOTEL_LIST_FAIL, payload : error.message});
    }
    }

    const detailsHotel = (hotelId) => async (dispatch) => {
        try{
            dispatch({type : HOTEL_DETAILS_REQUEST,payload: hotelId});
            const {data} = await axios.get("/api/hotels/" + hotelId);
            dispatch({type: HOTEL_DETAILS_SUCCESS, payload : data});
        }
        catch(error){
            dispatch({type: HOTEL_DETAILS_FAIL, payload : error.message});
        }
    }
    export {listHotels,detailsHotel};
  