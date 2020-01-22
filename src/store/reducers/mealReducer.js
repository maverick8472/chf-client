import {
    GET_MEALS,
    ADD_MEAL,
    DELETE_MEAL,
    MEALS_LOADING,
    CREATE_MEAL_ERROR
} from '../actions/types';
  
// const initialState = {
//     items: [],
//     loading: false
// };

const initialState = {
    meals: [
        {_id: "5e2796a7b5e18026889b61c5", name: "carrot", type: "normal", calories: 41},
        {_id: "5e2796d1b5e18026889b61c6", name: "salmon", type: "normal", calories: 185},
        {_id: "5e27970cb5e18026889b61c8", name: "spinach", type: "normal", calories: 7},
        {_id: "5e279726b5e18026889b61c9", name: "avocado", type: "normal", calories: 160},
    ],
    loading: false
};



const mealReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MEALS:
            return {
            ...state,
            meals: action.payload,
            loading: false
            };
        case DELETE_MEAL:
            return {
            ...state,
            meals: state.meals.filter(meal => meal._id !== action.payload)
            };
        case ADD_MEAL:
            return {
            ...state,
            meals: [action.payload, ...state.meals]
            };
        case MEALS_LOADING:
            return {
            ...state,
            loading: true
            };
        case CREATE_MEAL_ERROR:
            console.log('create project error',action.err)
            return {
                ...state,
                loading: false
                
            };
        default:
            return state;
    }
}

export default mealReducer;