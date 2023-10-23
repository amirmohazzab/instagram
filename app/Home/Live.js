import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Header} from 'react-native-elements'
import { FontAwesome,  MaterialIcons, Ionicons} from '@expo/vector-icons'
import {Dimensions} from 'react-native';



const {width: screenWidth, height: screenHeight} = Dimensions.get('window');


const Live = () => {
    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black"}}>
            <Header
                leftComponent={ <Ionicons name="ios-settings-sharp" size={24} color="#FFF" /> }
                centerComponent={{}}
                rightComponent={ <FontAwesome name="long-arrow-right" size={24} color="#FFF" /> }
                containerStyle={{
                    backgroundColor: 'black',
                    justifyContent: 'space-around',
                }}
            />
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text> Type </Text>
            </View>

            <View style={styles.footer}>
                <View style={styles.boxStyle}>
                    <View style={{width:30,height:30,borderRadius:15,borderWidth:1,borderColor:'#FFF',backgroundColor:'#000',alignItems:'center',justifyContent:'center'}}>
                        <Ionicons name="ios-flash" size={24} color="#FFF" />
                    </View>
                </View>
                <View style={{flex:3,height: 50, borderRadius:25,alignItems:'center',justifyContent:'center',backgroundColor:'#FFF'}}>
                    <Text style={{color:'#030303', fontSize: 16}}>Start Live Video</Text>
                </View>
                <View style={styles.boxStyle}>
                    <MaterialIcons name="autorenew" size={30} color="#FFF" />
                </View>
            </View>
        </View>
     );
}
 
export default Live;

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
  }
})





