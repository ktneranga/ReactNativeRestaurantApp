import React from "react";
import {Text, View, StyleSheet, FlatList} from 'react-native';
import MealItem from "./MealItem";

const MealList = (props) => {

    const renderItem = (itemData) => {
        <MealItem
            title={itemData.item.title}
            // onSelectMeal={()=>{props.navigation.navigate({
            //     routeName: 'MealDetails',
            //     params : {
            //         mealId: itemData.item.id
            //     }
            // })}}
            onSelectMeal={()=>{props.navigation.navigate('MealDetails', {
                mealId: itemData.item.id
            })}}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
        />
    }

    return(
        <FlatList
            data={props.listData}
            renderItem={renderItem}
            keyExtractor={(item,index) => item.id}
            style={{ width: '100%' }}
        />
    );
}

const styles = StyleSheet.create({

});

export default MealList;