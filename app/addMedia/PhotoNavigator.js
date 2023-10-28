import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import AddMediaTabNavigator from './AddMediaTabNavigator';
import Photo from './Photo'

const Stack = createStackNavigator();

const PhotoNavigator = ({navigation}) => {


    return ( 
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Photo" component={Photo}/>
            <Stack.Screen name="AddMediaTabNavigator" component={AddMediaTabNavigator} />
        </Stack.Navigator>
     );
}
 
export default PhotoNavigator;