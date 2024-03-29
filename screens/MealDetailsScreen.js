import React,{useEffect} from 'react';
import {Text, View, StyleSheet, Button, ScrollView, Image, StatusBar} from 'react-native';
import DefaultText from '../components/DefaultText';
import ListItem from '../components/ListItem';
import {useSelector, useDispatch} from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { toggleFavorite } from '../store/actions/meals';


const MealDetailsScreen = (props) => {

    const availableMeals = useSelector(state=>state.meals.meals);

    const dispatch = useDispatch();

    // const mealId = props.navigation.getParam('mealId');
    const mealId = props.route.params.mealId;
    const mealDetails = availableMeals.find(item=>item.id == mealId);

    useEffect(()=>{
        props.navigation.setOptions({
            title: mealDetails.title
        });
    });

    React.useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerRight: () => (
                <HeaderButtons
                    HeaderButtonComponent={HeaderButton}
                >
                    <Item title='Favorite' iconName='ios-star' onPress={()=>{
                        dispatch(toggleFavorite(mealId));
                    }}/>
                </HeaderButtons>
              ),
        })
    }, [props.navigation]);

    return(
        <ScrollView style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: mealDetails.imageUrl }}
            />
            <View style={styles.details}>
                <DefaultText>{mealDetails.duration}m</DefaultText>
                <DefaultText>{mealDetails.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{mealDetails.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
                {
                    mealDetails.ingredients.map((ingredient)=>(
                        <ListItem key={ingredient} item={ingredient}/>
                    ))
                }
            <Text style={styles.title}>Steps</Text>
            {
                mealDetails.steps.map(step=>(
                    <ListItem key={step} item={step}/>
                ))
            }
        </ScrollView>
    );
};

// MealDetailsScreen.navigationOptions = navigationData => {
//     const mealId = navigationData.navigation.getParam('mealId');
//     const mealDetails = MEALS.find(item=>item.id == mealId);
//     return{
//         headerTitle: mealDetails.title,
//         headerRight: ()=>(<Text>Fav</Text>)
//     };
// }

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    screen : {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    details:{
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 42,
      },
    image:{
        width: '100%',
        height: 200
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        paddingVertical: 20
    }
});

export default MealDetailsScreen;