import React, {useEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Foundation, Ionicons, AntDesign} from '@expo/vector-icons'
import {HomeTab} from './screens';
import ProfileNavigator from './Profile/ProfileNavigator';
import LikeTabNavigator from './Like/LikeTabNavigator'
import addMediaBottomTabNavigator from './addMedia/AddMediaBottomTabNavigator'


const Tab = createBottomTabNavigator();

const MainScreen = () => {

    useEffect(() => {
        
    }, [])

    return ( 
        <Tab.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#000",
                inactiveTintColor: "#d1cece",
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
                name="addMediaNav" component={addMediaBottomTabNavigator} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="add-circle" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Like" component={LikeTabNavigator} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                      <AntDesign name="heart" color={color} size={size} />
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