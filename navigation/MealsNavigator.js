// stack navigator
// screens are manage on a stack in a mobile application.
// import { createAppContainer } from 'react-navigation'
// import { createStackNavigator} from 'react-navigation-stack';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoryScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HeaderButton from '../components/HeaderButton';
import FilterScreen from '../screens/FilterScreen';

import { Platform } from 'react-native';
import Color from '../constants/Color';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MealsNavigator = (props) => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Categories'
                component={CategoryScreen}
                options={{ 
                    headerStyle :{
                        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : Color.accentColor,
                    headerLeft: ()=>(
                        <HeaderButtons
                            HeaderButtonComponent={HeaderButton}
                        >
                            <Item
                                title='Menu'
                                iconName='ios-menu'
                                onPress={()=>{props.navigation.toggleDrawer()}}
                            />
                        </HeaderButtons>
                    )
                    }}
            />
            <Stack.Screen
                name='CategoryMeals'
                component={CategoryMealsScreen}
                options={
                    { 
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : Color.accentColor,
                    }}   
            />
            <Stack.Screen
                name='MealDetails'
                component={MealDetailsScreen}
                options={
                    { 
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : Color.accentColor,
                    // headerRight: () => (
                    //     <HeaderButtons
                    //         HeaderButtonComponent={HeaderButton}
                    //     >
                    //         <Item title='Favorite' iconName='ios-star' onPress={()=>{
                    //             console.log('Mark as favorite'); 
                    //         }}/>
                    //     </HeaderButtons>
                    //   ),
                    }}
            />
        </Stack.Navigator>
    );
}

const FavoriteScreenNavigator = (props) => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Favorites'
                component={FavoritesScreen}
                options={{ 
                    title: 'Your Favorites',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : 'white'
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor,
                    headerLeft: ()=>(
                        <HeaderButtons
                            HeaderButtonComponent={HeaderButton}
                        >
                            <Item
                                title='Menu'
                                iconName='ios-menu'
                                onPress={()=>{props.navigation.toggleDrawer()}}
                            />
                        </HeaderButtons>
                    )
                 }}
            />
        </Stack.Navigator>
    );
}


const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const MealsFavTabNavigator = () => {

    if(Platform.OS === 'android'){
        return(
                <Tab.Navigator
                    activeTintColor={Color.accentColor}
                    shifting={true}
                >
                    <Tab.Screen
                        name='Meals'
                        component={MealsNavigator}
                        options={{ 
                            tabBarLabel: 'Meals',
                            tabBarIcon:({color})=> <Ionicons name='ios-restaurant' size={25} color={color}
                            />,
                            tabBarColor : Color.primaryColor,
                            shifting: true
                        }}
                    />
                    <Tab.Screen
                        name='Favorites'
                        component={FavoriteScreenNavigator}
                        options={{ 
                            tabBarLabel: 'Favorites!',
                            tabBarIcon: ({color})=> <Ionicons name='ios-star' size={25} color={color}/>,
                            tabBarColor : Color.accentColor,
                            shifting: true
                        }}
                    />
                </Tab.Navigator> 
        ) ;
    }

    return(
        <Tab.Navigator
        tabBarOptions={{ 
            activeTintColor: Color.accentColor
         }}
        >
            <Tab.Screen
                name='Meals'
                component={MealsNavigator}
                options={{ 
                    tabBarLabel: 'Meals',
                    tabBarIcon:({color})=> <Ionicons name='ios-restaurant' size={25} color={color} />
                 }}
            />
            <Tab.Screen
                name='Favorites'
                component={FavoriteScreenNavigator}
                options={{ 
                    tabBarLabel: 'Favorites!',
                    tabBarIcon: ({color})=> <Ionicons name='ios-star' size={25} color={color}/>
                 }}
            />
        </Tab.Navigator>
    );
}

const FiltersNavigator = (props) => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Filters'
                component={FilterScreen}
                options={{ 
                    title: 'Filter Meals',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : Color.accentColor,
                    headerLeft: ()=>(
                        <HeaderButtons
                            HeaderButtonComponent={HeaderButton}
                        >
                            <Item
                                title='Menu'
                                iconName='ios-menu'
                                onPress={()=>{props.navigation.toggleDrawer()}}
                            />
                        </HeaderButtons>
                    ),
                    headerRight: ()=>(
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                title='Save'
                                iconName='ios-save'
                            />
                        </HeaderButtons>
                    )
                 }}
            />
        </Stack.Navigator>
    );
}

const mainNavigator = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name='MealsFavs'
                    component={MealsFavTabNavigator}
                />
                <Drawer.Screen
                    name='Filters'
                    component={FiltersNavigator}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default mainNavigator;











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