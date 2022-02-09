import {MEALS} from '../../data/dummy-data';

//initial state
const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [] //when app starts we have no any favorite foods
};

const mealsReducer = (state = initialState, action) => {
    return state; // return new state
} 

export default mealsReducer; //implement the redux store in app.js