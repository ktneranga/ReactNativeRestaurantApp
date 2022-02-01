import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

const MealItem = (props) => {

  let TouchableCmp = TouchableOpacity;

  if(Platform.OS == 'android' && Platform.Version >=21){
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.mealItem}>
      <TouchableCmp onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
              </View>
              {/* in ios there is an extra background, wrap text with view */}
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row'
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#ccc',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetails: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bgImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end'
  },
  title: {
    color: 'white',
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'center',
  },
  titleContainer: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});

export default MealItem;

