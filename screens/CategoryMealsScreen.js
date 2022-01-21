import React from 'react';
import {Text, View, StyleSheet, Button, Platform} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Color from '../constants/Color';

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find((cat)=>cat.id === catId);

    return(
        <View style={styles.screen}>
            <Text>Category Meals Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title='Go to Meal Details' onPress={()=>{
                props.navigation.navigate({routeName: 'MealDetails'});
                //push needs to navigate to the same screen, when we need 
                //to load different content to the same screen
                // props.navigation.push('MealDetails');
            }} />
            <Button title='Go Back' onPress={()=>{
                // props.navigation.goBack();
                props.navigation.pop();
            }} />
        </View>
    );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find((cat)=>cat.id === catId);

    return{
        headerTitle: selectedCategory.title,
        // headerStyle: {
        //     backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
        // },
        // headerTintColor: Platform.OS === 'android' ? 'white' : Color.accentColor 
    };
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;