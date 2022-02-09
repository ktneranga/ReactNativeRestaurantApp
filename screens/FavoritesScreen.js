import React from 'react';
import {StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import {useSelector} from 'react-redux'

const FavoritesScreen = (props) => {

    const availableMeals = useSelector(state=> state.meals.favoriteMeals); 

    const favMeals = availableMeals;

    return(
        <MealList listData={favMeals} navigation={props.navigation} /> //forwarding the navigation prop
    );
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;