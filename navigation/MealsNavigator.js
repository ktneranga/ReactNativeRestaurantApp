// stack navigator
// screens are manage on a stack in a mobile application.
import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack';

import CategoryScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

const MealsNavigator = createStackNavigator({
    Categories : CategoryScreen,
    CategoryMeals : {
        screen : CategoryMealsScreen
    },
    MealDetails : {
        screen: MealDetailsScreen
    }
});

export default createAppContainer(MealsNavigator);