import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {MEALS} from '../data/dummy-data';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MealDetailsScreen = (props) => {

    // const mealId = props.navigation.getParam('mealId');
    const mealId = props.route.params.mealId;
    const mealDetails = MEALS.find(item=>item.id == mealId);

    return(
        <View style={styles.screen}>
            <Text>{mealDetails.title}</Text>
            <Button title='Back' onPress={()=>{
                //props.navigation.pop(); ->alternative to goback
                //props.navigation.replace('screenname'); new page, cannot go back
                props.navigation.popToTop(); //go to root screen
            }}/>
        </View>
    );
};

MealDetailsScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const mealDetails = MEALS.find(item=>item.id == mealId);
    return{
        headerTitle: mealDetails.title,
        headerRight: ()=> (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favorite' iconName='ios-star' onPress={()=>{
                    console.log('Marked as favourite');
                }}/>
            </HeaderButtons>
        )
    };
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailsScreen;