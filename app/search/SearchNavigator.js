import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SearchTab from '../screens/SearchTab';
import SearchTopTab from '../screens/SearchTopTab';

const Stack = createStackNavigator();

const SearchNavigator = () => {

    return ( 
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Search" component={SearchTab}/>
            <Stack.Screen name="SearchTopTab" component={SearchTopTab}/>
        </Stack.Navigator>
     );
}
 
export default SearchNavigator;