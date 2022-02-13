//redux actions

//SETTING UP unique identifier
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'; //to switch a feature , add or remove
export const SET_FILTERS = 'SET_FILTERS';

//action creator
export const toggleFavorite = (id) => {
    return {type: TOGGLE_FAVORITE, mealId: id}; //action => JS object that describe the action
};

export const setFilters = (filterSettings) => { 
    return {type: SET_FILTERS, filters: filterSettings} //filterSettings objects
}

//action describe about what happened => here user clicked on favorite toggle button