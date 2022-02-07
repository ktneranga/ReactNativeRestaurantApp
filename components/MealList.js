import React from "react";
import {Text, View, StyleSheet, FlatList} from 'react-native';
import MealItem from "./MealItem";

const MealList = (props) => {

    const renderItem = (itemData) => {
        // console.log(itemData.item.title);
        return(
            <MealItem
                title={itemData.item.title}
                // onSelectMeal={()=>{props.navigation.navigate({
                //     routeName: 'MealDetails',
                //     params : {
                //         mealId: itemData.item.id
                //     }
                // })}}
                onSelectMeal={()=>{props.navigation.navigate('MealDetails', {
                    mealId: itemData.item.id,
                    mealTitle: itemData.item.title
                })}}
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
                data={props.listData}
                renderItem={renderItem}
                keyExtractor={(item,index) => item.id}
                style={{ width: '100%' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
});

export default MealList;