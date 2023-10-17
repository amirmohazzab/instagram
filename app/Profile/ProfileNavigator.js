import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {ProfileBookmark, CreateCollection} from './';
import ProfileTab from '../screens/ProfileTab';
import SuggestTopTab from '../screens/SuggestTopTab';
import Setting from './Setting';
import Edit from './Edit';

const Stack = createStackNavigator();

const ProfileNavigator = () => {

    return ( 
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="ProfileNav" component={ProfileTab}/>
            <Stack.Screen name="CreateCollection" component={CreateCollection}/>
            <Stack.Screen name="ProfileBookmark" component={ProfileBookmark} />
            <Stack.Screen name="SuggestTopTab" component={SuggestTopTab} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
     );
}
 
export default ProfileNavigator;