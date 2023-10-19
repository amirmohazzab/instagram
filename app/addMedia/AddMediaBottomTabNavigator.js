import React from 'react'
import {View, Text} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Video, Photo, Gallery} from '.'


const Tab = createBottomTabNavigator();

const AddMediaBottomTabNavigator = ({navigation}) => {


    navigation.setOptions({
      tabBarStyle: {display: 'none'}
    });
    
    return ( 
        <Tab.Navigator 
          initialRouteName="Video"
          backBehavior = 'previousTab'
          screenOptions={{
            tabBarLabelStyle: {
                fontSize: 20
            },
            headerShown: false,
            tabBarIconStyle: {display: "none"},
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "grey",
            tabBarActiveBackgroundColor: "white",
            tabBarItemStyle: {
              justifyContent: "center",
            }
          }}
        >
          <Tab.Screen name="Video" component={Video} />
          <Tab.Screen name="Photo" component={Photo} />
          <Tab.Screen name="Gallery" component={Gallery} />
        </Tab.Navigator>
      );
    };
 
export default AddMediaBottomTabNavigator;