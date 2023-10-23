import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Header} from 'react-native-elements'
import { FontAwesome, Foundation, MaterialIcons, Ionicons, EvilIcons, Entypo} from '@expo/vector-icons'
import {Dimensions} from 'react-native';



const {width: screenWidth, height: screenHeight} = Dimensions.get('window');


const Superzoom = () => {
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
                    <EvilIcons name="image" size={24} color="#FFF" />
                </View>
                <View style={styles.boxStyle}>
                    <View style={{width:30,height:30,borderRadius:15,borderWidth:1,borderColor:'#FFF',backgroundColor:'#000',alignItems:'center',justifyContent:'center'}}>
                        <Ionicons name="ios-flash" size={24} color="#FFF" />
                    </View>
                </View>
                <View style={styles.boxStyle}>
                    <View style={{width:50,height:50,borderRadius:25,borderWidth:1,borderColor:'#FFF',backgroundColor:'#FFF',alignItems:'center',justifyContent:'center'}}>
                        <Foundation name="target" size={24} color="red" />
                    </View>
                </View>
                <View style={styles.boxStyle}>
                    <MaterialIcons name="autorenew" size={30} color="#FFF" />
                </View>
                <View style={styles.boxStyle}>
                    <Entypo name="emoji-happy" size={40} color="#FFF" />
                </View>
            </View>
            



        </View>
     );
}
 
export default Superzoom;

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





