import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Color from '../constants/Color';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = (props) => {

    const favMeals = MEALS.filter(meal=>meal.id == 'm1' || meal.id == 'm2');

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