import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import DefaultText from './DefaultText';

const ListItem = (props) => {
    return(
        <View style={styles.listitem}>
            <DefaultText>
                {props.item}
            </DefaultText>
        </View>
    );
}

const styles = StyleSheet.create({
    listitem: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10
    }
});

export default ListItem;