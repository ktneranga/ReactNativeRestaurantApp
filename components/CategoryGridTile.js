import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity 
            style={styles.gridItem} 
            onPress={props.onPress}
        >
            <View style={ {...styles.container, ...{backgroundColor: props.color}} }>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 15
    },
    title: {
        fontFamily: 'open-sans-bold'
    }
});

export default CategoryGridTile;