import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {View, TextInput} from 'react-native'
import {Header} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import {Tagg, Top, People, Places} from '../search';


const TopTab = createMaterialTopTabNavigator();



const SearchTopTab = () => {
	
	
    return ( 
        <View style={{flex: 1}}> 
            <Header
                leftComponent={ <Ionicons name="ios-search" size={30} color="black" /> }
                centerComponent= { <TextInput placeholder="Search" style={{ fontSize: 20}} /> }
                containerStyle={{
                    backgroundColor: 'white',
                    justifyContent: 'space-around',
                }}
            />
            
            <TopTab.Navigator 
                initialRouteName="Top"
                backBehavior="previousTab"
                screenOptions={{
                    activeTintColor: "black",
                    inactiveTintColor: "gray",
                    tabBarLabelStyle: { 
                        fontSize: 16,
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: "black"
                    },
                }}
            >
                <TopTab.Screen name="Top" component={Top} />
                <TopTab.Screen name="People" component={People} />
                <TopTab.Screen name="Tagg" component={Tagg} />
                <TopTab.Screen name="Places" component={Places} />
            </TopTab.Navigator>
        </View>
 );
}

 
export default SearchTopTab;