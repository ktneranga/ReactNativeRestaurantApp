import React, {useState} from 'react';
import {Text, View, StyleSheet, Switch,Platform} from 'react-native';
import Color from '../constants/Color';
import {useDispatch} from 'react-redux'
import setFilters from '../store/actions/meals';

const FilterScreen = (props) => {

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian ] = useState(false);

    const FilterSwitch = (props) => {
        return(
            <View style={styles.filterContainer}>
                <Text>{props.label}</Text>
                <Switch
                    trackColor={{ true: Color.primaryColor, false: "#767577"}}
                    thumbColor={Platform.OS === 'android' ? Color.primaryColor : ''}
                    onValueChange={props.onChange}
                    value={props.value}
                />
            </View>
        )
    }

    return(
        <View style={styles.screen}>
            <FilterSwitch
                label='Gluten-free'
                onChange={newValue => setIsGlutenFree(newValue)}
                value={isGlutenFree}
            />
            <FilterSwitch
                label='Lactose-free'
                onChange={newValue => setIsLactoseFree(newValue)}
                value={isLactoseFree}
            />
            <FilterSwitch
                label='Vegan'
                onChange={newValue => setIsVegan(newValue)}
                value={isVegan}
            />
            <FilterSwitch
                label='Vegetarian'
                onChange={newValue => setIsVegetarian(newValue)}
                value={isVegetarian}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily : 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center',
        margin: 20
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    }
});

export default FilterScreen;