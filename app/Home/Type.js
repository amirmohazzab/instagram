import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Header} from 'react-native-elements'
import { FontAwesome, Foundation, MaterialIcons, Ionicons} from '@expo/vector-icons'
import {Dimensions} from 'react-native';



const {width: screenWidth, height: screenHeight} = Dimensions.get('window');


const Type = () => {
    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black"}}>
            <Header
                leftComponent={ 
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "flex-start", height: 35}}>
                        <Foundation name="align-left" size={30} color="white" />
                        <View style={{width:22,height:22,borderRadius:5,borderWidth:1,borderColor:'#FFF',justifyContent:'center',alignItems:'center',marginLeft:15}}>
                            <Text style={{color:'#FFF', fontSize: 16}}>A</Text>
                        </View>
                    </View> 
                }
                centerComponent={
                    <View style={{width:120,height:20,borderRadius:20,borderWidth:1,borderColor:'#FFF',justifyContent:'center',alignItems:'center', height: 35}}>
                        <Text style={{color:'#FFF',padding:3}}>TYPEWRITER</Text>
                    </View>
                }
                rightComponent={ <FontAwesome name="send" size={24} color="black" onPress={() => navigation.navigate('Direct')} /> }
                containerStyle={{
                    backgroundColor: 'black',
                    justifyContent: 'space-around',
                }}
            />
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <TextInput
                    style={styles.TextInputstyle}
                    underlineColorAndroid="transparent"
                    placeholder="Tap To Type"
                    placeholderTextColor="#9e9e9e"
                    placeholderStyle={{fontSize:18}}
                    multiline
                    numberOfLines={10}
                />
            </View>
            <View style={styles.footer}>
                <View style={styles.boxStyle}>
                    <View style={{width:30,height:30,borderRadius:15,borderWidth:1,borderColor:'#FFF',backgroundColor:'#000'}} />
                </View>
                <View style={styles.boxStyle}>
                    <View style={{width:50,height:50,borderRadius:30,borderWidth:1,borderColor:'#FFF',backgroundColor:'#000',justifyContent:'center',alignItems:'center'}}>
                        <MaterialIcons name="chevron-right" size={24} color="#FFF" />
                    </View>
                </View>
                    <View style={{justifyContent:'space-around',flex:1,flexDirection:'row',alignItems:'center'}}>
                    <MaterialIcons name="autorenew" size={24} color="#FFF" />
                    <Ionicons name="ios-camera-outline" size={24} color="#FFF" />
                </View>
            </View>
        </View>
     );
}
 
export default Type;

const styles = StyleSheet.create({
  footer: {
    width: "100%", 
    height: 60, 
    position: "absolute", 
    right: 0, 
    left: 0, 
    bottom: 0, 
    backgroundColor: "black", 
    flexDirection: "row", 
    justifyContent: "space-between"
  },
  boxStyle: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  TextInputstyle:{
    width:'95%',
    textAlign:'left',
    height:150,
    paddingVertical:'3%',
    color:'#FFF'
  }
})





