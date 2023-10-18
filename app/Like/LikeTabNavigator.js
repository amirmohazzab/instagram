import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Screen from '../components/Screen';
import You from './You'
import Following from './Following';


const TopTab = createMaterialTopTabNavigator();

const LikeTabNavigator = () => {

    return ( 
            <Screen> 
                <TopTab.Navigator 
                    initialRouteName="AllCourses"
                    backBehavior="none"
                    screenOptions={{
                        activeTintColor: "black",
                        inactiveTintColor: "gray",
                        labelStyle: {
                            
                        },
                        style: {
                            backgroundColor: "#f8f4f4"
                        }
                    }}
                >
                    <TopTab.Screen name="You" component={You}  />
                    <TopTab.Screen name="Following" component={Following} />
                </TopTab.Navigator>
            </Screen>    
     );
}
 
export default LikeTabNavigator;