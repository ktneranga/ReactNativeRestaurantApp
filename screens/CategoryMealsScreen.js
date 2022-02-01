import React from 'react';
import {Text, View, StyleSheet, Button, Platform, FlatList} from 'react-native';
import { CATEGORIES,MEALS} from '../data/dummy-data';
import Color from '../constants/Color';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');

    // const selectedCategory = CATEGORIES.find((cat)=>cat.id === catId);

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId)>=0); //if true this meal has catId

    const renderItem = (itemData) => { //itemData object passed by the flatlist
        return(
            <MealItem
                title={itemData.item.title}
                onSelectMeal={()=>{}}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
            />
        );
    }

    return(
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                renderItem={renderItem}
                keyExtractor={(item,index) => item.id}
                style={{ width: '100%' }}
            />
        </View>
    );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find((cat)=>cat.id === catId);

    return{
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Color.accentColor 
    };
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
});

export default CategoryMealsScreen;