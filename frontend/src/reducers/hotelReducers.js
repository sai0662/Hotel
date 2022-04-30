import { HOTEL_DETAILS_FAIL, HOTEL_DETAILS_REQUEST, HOTEL_DETAILS_SUCCESS, HOTEL_LIST_FAIL, HOTEL_LIST_REQUEST, HOTEL_LIST_SUCCESS } from "../constants/hotelConstants";

function hotelListReducer(state = {hotels : []}, action){

    switch(action.type){
        case HOTEL_LIST_REQUEST:
            return {loading:true};
        case HOTEL_LIST_SUCCESS:
            return {loading:false,hotels: action.payload};
        case HOTEL_LIST_FAIL:
            return {loading:false, error:action.payload};
        default:
            return state; 
    }
}
function hotelDetailsReducer(state = {hotel : {}}, action){

    switch(action.type){
        case HOTEL_DETAILS_REQUEST:
            return {loading:true};
        case HOTEL_DETAILS_SUCCESS:
            return {loading:false,hotel: action.payload};
        case HOTEL_DETAILS_FAIL:
            return {loading:false, error:action.payload};
        default:
            return state; 
    }
}

export {hotelListReducer, hotelDetailsReducer}