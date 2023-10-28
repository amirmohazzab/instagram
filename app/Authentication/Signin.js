import React from 'react'
import {View, Text, Icon, TextInput, TouchableOpacity} from 'react-native'
import {MaterialIcons, Ionicons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Sighin = ({navigation}) => {

    const signInAsync = async() => {
        await AsyncStorage.setItem('userToken','User');
        navigation.navigate('App');
    };

    return ( 
        <View style={{flex:1, backgroundColor:'#000'}}>
      
        <View style={{flex:9,backgroundColor:'#FFF',padding:10}}>  
          <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}> 
              <View style={{flexDirection:'row'}}>
                <Text >English</Text>
                {/* <Icon name="md-arrow-dropdown" style={{marginLeft:3,marginBottom:5, color:'#ccc'}} /> */}
                <MaterialIcons name="arrow-drop-down" size={24} color="black" style={{marginLeft:3, marginBottom:5}} />
              </View>
          </View>
          
          <View style={{flex:2,backgroundColor:'#FFF',justifyContent:'flex-end',alignItems:'center'}}>
              <Text style={{fontSize:28,marginBottom:10,fontWeight:'bold'}}>Instagram</Text>
          </View>
          
          <View style={{flex:4,backgroundColor:'#FFF',alignItems:'center'}}>
            <TextInput
              style={{width:'97%',height:40,borderWidth:1,borderRadius:3,color:'#ccc',marginTop:15,borderColor:'#CCC', paddingLeft: 10}}
              placeholder="username"
              underlineColorAndroid="transparent"
              />
              <TextInput
              style={{width:'97%',height:40,borderWidth:1,borderRadius:3,color:'#ccc',marginTop:15,borderColor:'#CCC', paddingLeft: 10}}
              placeholder="password"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              />
              <TouchableOpacity onPress={signInAsync} style={{borderRadius:3,justifyContent:'center',alignItems:'center',width:'97%',height:40,backgroundColor:'dodgerblue',marginTop:15}}>
                <Text style={{color:'#FFF'}}>Log In</Text>
              </TouchableOpacity>
              <View style={{flexDirection:'row',marginTop:15}}>
                <Text>Forget Your Login Detail? </Text>
                <Text style={{color:'#000'}}>Get Help Signing in</Text>
              </View>
          </View>
          
          <View style={{flex:2,backgroundColor:'#FFF'}}>
            <View style={{flex:1,backgroundColor:'#FFF',justifyContent:'center',alignItems:'center'}}>
              <View style={{width:'100%',height:1,backgroundColor:'#ccc'}} />
              <Text style={{width:30,height:20,backgroundColor:'#fff',position:'absolute',textAlign:'center'}}>OR</Text>
            </View>
            <View style={{flex:2,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                  <Ionicons name="logo-facebook" size={24} color="dodgerblue" />
                  <Text style={{color:'dodgerblue',marginLeft:5,marginTop:5}}>Log in with Facebook</Text>
                </View>
            </View>
          </View>
        </View>
        <View style={{flex:1,backgroundColor:'#fff',borderTopWidth:1,borderTopColor:'#CCCC',justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row'}}>
            <Text>Dont have an account? </Text>
            <Text style={{color:'#000'}}>Sign up</Text>
          </View>
        </View>
        
      </View>
     );
}
 
export default Sighin;