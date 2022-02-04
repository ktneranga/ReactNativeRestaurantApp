import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Color from '../constants/Color';

const FavoritesScreen = (props) => {
    return(
        <View style={styles.screen}>
            <Text>Favorites Meals</Text>
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

export default FavoritesScreen;