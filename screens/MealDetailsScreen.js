import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const MealDetailsScreen = (props) => {
    return(
        <View style={styles.screen}>
            <Text>Meal details screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailsScreen;