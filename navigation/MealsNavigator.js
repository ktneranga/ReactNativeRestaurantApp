// stack navigator
// screens are manage on a stack in a mobile application.
// import { createAppContainer } from 'react-navigation'
// import { createStackNavigator} from 'react-navigation-stack';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Button} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import CategoryScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HeaderButton from '../components/HeaderButton';

import { Platform } from 'react-native';
import Color from '../constants/Color';

const Stack = createStackNavigator();

const MealsNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Categories'
                component={CategoryScreen}
                options={{ 
                    headerStyle :{
                        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : Color.accentColor
                    }}
            />
            <Stack.Screen
                name='CategoryMeals'
                component={CategoryMealsScreen}
                options={{ 
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : Color.accentColor
                    }}
            />
            <Stack.Screen
                name='MealDetails'
                component={MealDetailsScreen}
                options={{ 
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : Color.accentColor,
                    headerRight: () => (
                        <HeaderButtons
                            HeaderButtonComponent={HeaderButton}
                        >
                            <Item title='Favorite' iconName='ios-star' onPress={()=>{
                                console.log('Mark as favorite');
                            }}/>
                        </HeaderButtons>
                      ),
                    }}
            />
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

const MealsFavTabNavigator = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name='Meals'
                    component={MealsNavigator}
                />
                <Tab.Screen
                    name='Favorites'
                    component={FavoritesScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MealsFavTabNavigator;











// const MealsNavigator = createStackNavigator({
//     Categories : {
//        screen: CategoryScreen,
//     //    navigationOptions: {
//     //         headerStyle: {
//     //             backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
//     //         },
//     //         headerTintColor: Platform.OS === 'android' ? 'white' : Color.accentColor 
//     //     }
//     },
//     CategoryMeals : {
//         screen : CategoryMealsScreen,
//         // navigationOptions: {
//         //     headerStyle: {
//         //         backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
//         //     },
//         //     headerTintColor: Platform.OS === 'android' ? 'white' : Color.accentColor 
//         // }
//     },
//     MealDetails : {
//         screen: MealDetailsScreen
//     }
// },{
//     defaultNavigationOptions: {
//             // headerTitle: 'Teran',
//             headerStyle: {
//                 backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
//             },
//             headerTintColor: Platform.OS === 'android' ? 'white' : Color.accentColor 
//     }
// });

// export default createAppContainer(MealsNavigator);