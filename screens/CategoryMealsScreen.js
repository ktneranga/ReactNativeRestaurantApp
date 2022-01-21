import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const CategoryMealsScreen = (props) => {
    return(
        <View style={styles.screen}>
            <Text>Category Meals Screen</Text>
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

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;