import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux' ;
import {useSelector} from 'react-redux'

// import MealsNavigator from './navigation/MealsNavigator';
import MealsFavTabNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';

const rootReducer = combineReducers({
  meals: mealsReducer
});

//central store
const store = createStore(rootReducer);

//now this store need to be provided to our app => react redux

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans-regular' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish={()=>setFontLoaded(true)}
        onError={(err)=>console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MealsFavTabNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
