import React,{useEffect} from 'react';
import {useSelector} from 'react-redux' //hook
import {StyleSheet} from 'react-native';
import {MEALS} from '../data/dummy-data';
import Color from '../constants/Color';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
    // const catId = props.navigation.getParam('categoryId');
    const catId = props.route.params.categoryId;
    // const selectedCategory = CATEGORIES.find((cat)=>cat.id === catId);

    const availableMeals = useSelector(state=>state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId)>=0); //if true this meal has catId


    useEffect(()=>{
       props.navigation.setOptions({
           title: props.route.params.categoryTitle
       });
    });

    // const renderItem = (itemData) => { // itemData object passed by the flatlist
    //     return(
    //         <MealItem
    //             title={itemData.item.title}
    //             // onSelectMeal={()=>{props.navigation.navigate({
    //             //     routeName: 'MealDetails',
    //             //     params : {
    //             //         mealId: itemData.item.id
    //             //     }
    //             // })}}
    //             onSelectMeal={()=>{props.navigation.navigate('MealDetails', {
    //                 mealId: itemData.item.id
    //             })}}
    //             duration={itemData.item.duration}
    //             complexity={itemData.item.complexity}
    //             affordability={itemData.item.affordability}
    //             image={itemData.item.imageUrl}
    //         />
    //     );
    // }

    return(
        <MealList listData={displayedMeals} navigation={props.navigation} />
        // <View style={styles.screen}>
        //     <FlatList
        //         data={displayedMeals}
        //         renderItem={renderItem}
        //         keyExtractor={(item,index) => item.id}
        //         style={{ width: '100%' }}
        //     />
        // </View>
    );
}

// CategoryMealsScreen.navigationOptions = (navigationData) => {
//     const catId = navigationData.navigation.getParam('categoryId');

//     const selectedCategory = CATEGORIES.find((cat)=>cat.id === catId);

//     return{
//         headerTitle: selectedCategory.title,
//         headerStyle: {
//             backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
//         },
//         headerTintColor: Platform.OS === 'android' ? 'white' : Color.accentColor 
//     };
// }

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
});

export default CategoryMealsScreen;