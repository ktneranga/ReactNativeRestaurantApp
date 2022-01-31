import React from 'react';
import {Text, View, StyleSheet, Button, FlatList, TouchableOpacity, Platform} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Color from '../constants/Color';
import CategoryGridTile from '../components/CategoryGridTile';

//java script functions are the objects
const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={
                ()=>{props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id,
                        categoryTitle: itemData.item.title
                    }
                });
                }
            }
            />
        );
    }
    
    return(
        <FlatList 
            keyExtractor={(item,data)=>item.id} 
            data={CATEGORIES} 
            renderItem={renderGridItem} 
            numColumns={2} 
        />
    );
}

CategoriesScreen.navigationOptions = {
    title: 'Meal Categories',
    // headerStyle: {
    //     backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
    // },
    // headerTintColor: Platform.OS === 'android' ? 'white' : Color.accentColor 
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;