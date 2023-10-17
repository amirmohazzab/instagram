import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Foundation, Ionicons} from '@expo/vector-icons'
import {HomeTab} from './screens';
import ProfileNavigator from './Profile/ProfileNavigator';


const Tab = createBottomTabNavigator();

const MainScreen = () => {

    return ( 
        <Tab.Navigator
            initialRouteName="Profile"
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
            <Tab.Screen 
                name="Profile" component={ProfileNavigator} 
                options={{
                    
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="person-circle-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
     );
}
 
export default MainScreen;