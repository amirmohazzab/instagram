import React from 'react'
import {createBottomTabNavigator, View, Image} from '@react-navigation/bottom-tabs'
import EditImage from './EditImage'
import FilterImage from './FilterImage'
import {Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const AddMediaTabNavigator = ({navigation}) => {
    
    return ( 
     
        <Tab.Navigator 
          initialRouteName="Filter"
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
          

          <Tab.Screen name="Filter" component={FilterImage} />
          <Tab.Screen name="Edit" component={EditImage} />
        </Tab.Navigator>
          
      );
    };
 
export default AddMediaTabNavigator;