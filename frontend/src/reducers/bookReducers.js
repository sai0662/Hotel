import { BOOK_ADD_ITEM, BOOK_REMOVE_ITEM } from "../constants/bookConstants";

function bookReducer(state={bookItems:[]}, action){
    switch(action.type){
        case BOOK_ADD_ITEM:
            const item = action.payload;
            const hotel = state.bookItems.find(x=> x.hotel === item.hotel);
            if(hotel){

                return {
                    bookItems : 
                    state.bookItems.map(x=>x.hotel === hotel.hotel?hotel: x)
            };
        }
            return { bookItems: [...state.bookItems, item] }; 
            case BOOK_REMOVE_ITEM:
                return {bookItems:state.bookItems.filter(x=>x.hotel == action.payload)}
            default :
                return state
    }
}

export {bookReducer}