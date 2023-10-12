import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {HomeTab} from './navigatorTabs';
import { Foundation} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

const MainScreen = () => {

    return ( 
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#000",
                inactiveTintColor: "#d1cece",
                showIcon: true,
                tabBarShowLabel: false,
                style: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Tab.Screen 
                name="Home" component={HomeTab} 
                options={{
                   
                    tabBarIcon: ({ color, size }) => (
                      <Foundation name="home" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
     );
}
 
export default MainScreen;