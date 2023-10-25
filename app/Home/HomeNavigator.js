import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Direct from './Direct';
import HomeTab from '../screens/HomeTab';
import CameraBottomTabNavigator from './CameraBottomTabNavigator'
import Chat from './Chat'
import Comment from './Comment';

const Stack = createStackNavigator();

const HomeNavigator = () => {

    // navigationOptions = (navigation) => {
    //     if (navigation.state.index > 0) {
    //         tabBarStyle: {display: 'none'}
    //     }
    // }
    // navigation.setOptions({
    //    tabBarStyle: { display: 'none'}
    // });

    

    return ( 
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeNav" component={HomeTab}/>
            <Stack.Screen name="Camera" component={CameraBottomTabNavigator}/>
            <Stack.Screen name="Direct" component={Direct}/>
            <Stack.Screen name="Chat" component={Chat}/>
            <Stack.Screen name="Comment" component={Comment}/>
        </Stack.Navigator>
     );
}
 
export default HomeNavigator;