import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import AuthLoading from './Authentication/AuthLoading';
import MainScreen from './MainScreen';
import Sighin from './Authentication/Signin';


const Stack = createStackNavigator();

const RootNavigator = () => {

    return ( 
        <Stack.Navigator 
            screenOptions={{headerShown: false}}
            initialRouteName="AuthLoading"
        >
            <Stack.Screen name="AuthLoading" component={AuthLoading}/>
            <Stack.Screen name="App" component={MainScreen}/>
            <Stack.Screen name="Auth" component={Sighin}/>
        </Stack.Navigator>
     );
}
 
export default RootNavigator;