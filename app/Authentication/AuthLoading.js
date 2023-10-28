import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthLoading = ({navigation}) => {


    useEffect(() => {
        const AuthFunction = async() => {
            const userToken = await AsyncStorage.getItem('userToken');
            navigation.navigate(userToken ?'App':'Auth');
        };
        AuthFunction();
    }, []);

    
    return ( 
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" />
        </View>
     );
};
 
export default AuthLoading;
