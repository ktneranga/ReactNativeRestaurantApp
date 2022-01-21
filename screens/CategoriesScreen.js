import React from 'react';
import {Text, View, StyleSheet, Button, FlatList, TouchableOpacity, Platform} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Color from '../constants/Color';

//java script functions are the objects
const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={ ()=>{props.navigation.navigate({routeName: 'CategoryMeals'})} }>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
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
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Color.accentColor 
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        backgroundColor: 'yellow'
    }
});

export default CategoriesScreen;