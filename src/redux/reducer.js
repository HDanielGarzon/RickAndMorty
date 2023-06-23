import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState={
    myFavorites: []
}

const reducer = (state=initialState, action)=>{
    switch (action.types){
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            return{
                myFavorites: state.myFavorites.filter((elem)=> elem.id !== (action.payload))
            }


        default:
            return{
                ...state
            }
    }
}

export default reducer;