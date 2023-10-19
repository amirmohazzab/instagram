import React from 'react'
import {View, Image} from 'react-native'
import {Header} from 'react-native-elements'
import {Dimensions} from 'react-native';
import {MaterialIcons, Ionicons, AntDesign} from 'react-native-vector-icons';


const {width: screenWidth, height: screenHeight} = Dimensions.get('window');


const Photo = ({navigation}) => {
    return ( 
        <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center"}}>
            <Header
                leftComponent={ <AntDesign name="close" size={30} color="black" onPress={() => navigation.goBack()}/> }
                centerComponent={{ text: 'Photo', style: { color: '#000', fontSize: 20, fontWeight: "bold"} }}
                containerStyle={{
                    backgroundColor: 'white',
                    justifyContent: 'space-around',
                }}
            />
            <View style={{flex: 1}}>
                <View style={{flex: 4, width: screenWidth}}>
                    <Image 
                        source={require('../../assets/posts/3.jpg')}
                        style={{width: "100%", height: "100%"}}
                    />
                    <MaterialIcons name="autorenew" size={45} style={{color: "white", position: "absolute", left: 10, bottom: 10}}/>
                    <Ionicons name="ios-flash" size={35} style={{color:'white', position: 'absolute', right: 10, bottom: 10}} />
                </View>
                <View style={{flex:2,backgroundColor:'#FFF',justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:75,height:75,borderRadius:37.5,borderWidth:10,borderColor:'#F1F1F1'}} />
                </View>
            </View>
        </View>
     );
}
 
export default Photo;


