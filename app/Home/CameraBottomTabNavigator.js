import React from 'react'
import { ScrollView } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Type, Live, Normal, Boomrang, Superzoom} from './'


const Tab = createBottomTabNavigator();

const CameraBottomTabNavigator = ({navigation}) => {

    // navigation.setOptions({
    //   tabBarStyle: {display: 'none'}
    // });

    // CameraBottomTabNavigator.navigationOptions({
    //   tabBarVisible: {dis}

    // })

    CameraBottomTabNavigator.navigationOptions=(navigation)=>{
      
        tabBarVisible=false;
      
    }

    return ( 
      <Tab.Navigator 
        initialRouteName="Type"
        //swipeEnabled={false}
        //scrollEnabled: true,
    
        screenOptions={{
          headerShown: false,
          tabBarIconStyle: { display: "none" },
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarItemStyle: {
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "black",
          },
          activeTintColor: "white",
          inactiveTintColor: "white",
          activeBackgroundColor: "black",
          tabBarInactiveBackgroundColor: "black",
        }} 
      >
          <Tab.Screen name="Type" component={Type} options={{tabBarLabel: "TYPE"}} />
          <Tab.Screen name="Live" component={Live} options={{tabBarLabel: "LIVE"}} />
          <Tab.Screen name="Normal" component={Normal} options={{tabBarLabel: "NORMAL"}} />
          <Tab.Screen name="Boomrang" component={Boomrang} options={{tabBarLabel: "BOOMRANG"}} />
          <Tab.Screen name="Superzoom" component={Superzoom} options={{tabBarLabel: "SUPERZOOM"}} />
      </Tab.Navigator>
    );
  };

  export default CameraBottomTabNavigator;