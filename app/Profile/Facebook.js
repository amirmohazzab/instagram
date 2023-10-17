import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Button, Pressable} from 'react-native'
import { Dimensions} from 'react-native';
import {Entypo} from '@expo/vector-icons'



const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Facebook = () => {

    return ( 
        <View style={{flex: 1, alignItems: "center", marginTop: 100}}>
          <View style={{justifyContent:'center',alignItems:'center', paddingTop: 50}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={{width:100,height:100,borderColor:'#000',borderWidth:1,borderRadius:60,justifyContent:'center',alignItems:'center'}}>
              <Entypo name="facebook" size={50} color="dodgerblue" />
            </View>
          </View>
          <Text style={{fontSize:18,fontWeight:'bold',color:'#000',marginTop:10}}>Find Facebook Friends</Text>
          <Text>You choose what Friends to follow we never</Text>
          <Text> post to Facebook without your permission</Text>
          <Pressable style={{padding: 20, backgroundColor: 'dodgerblue', width: 0.95*screenWidth, marginTop: 10}} >
            <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}> Connect to Facebook </Text>
           </Pressable>
          </View>
        </View>
     );
}
 
export default Facebook;