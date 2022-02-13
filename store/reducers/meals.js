import {MEALS} from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals'; 
import { SET_FILTERS } from '../actions/meals'; 

//initial state
const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [] //when app starts we have no any favorite foods
};

const mealsReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(
                meal => meal.id === action.mealId
              );
              if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return { ...state, favoriteMeals: updatedFavMeals };
              } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
              }
        case SET_FILTERS:
          const appliedFilters = action.filters;
          const filteredMeals = state.meals.filter(meal => {
            if
          });

        default:
            return state;
    }
} 

export default mealsReducer; //implement the redux store in app.js