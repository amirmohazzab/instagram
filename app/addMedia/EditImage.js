import React from 'react'
import {View, Image, ScrollView, Icon, Text} from 'react-native'
import {Dimensions} from 'react-native';
import Constans from 'expo-constants';
import { Entypo, MaterialIcons, Feather } from '@expo/vector-icons';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');



const EditImage = () => {
    return ( 
        <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center"}}>
                <View style={{flex: 4, width: screenWidth, marginTop: Constans.statusBarHeight}}>
                    <Image 
                        source={require('../../assets/posts/3.jpg')}
                        style={{width: "100%", height: "100%"}}
                    />
                </View>
                <View style={{flex:2,backgroundColor:'#FFF',justifyContent:'center',alignItems:'center'}}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                    paddingStart:5,
                    paddingEnd:5,
                    alignItems:'center'
                    }}
                >
                    <View style={{width:100,height:'80%'}}>
                        <View style={{width:70,height:30,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#000'}}>Adjust</Text>
                        </View>
                        <View style={{width:70,height:70,borderRadius:35,borderColor:'#ccc',justifyContent:'center',alignItems:'center'}}>
                            <Entypo name="adjust" size={40} color="black" />
                        </View>
                    </View>
                    <View style={{width:100,height:'80%'}}>
                        <View style={{width:70,height:30,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#000'}}>Brightness</Text>
                        </View>
                        <View style={{width:70,height:70,borderRadius:35,borderColor:'#ccc',justifyContent:'center',alignItems:'center'}}>
                            <MaterialIcons name="brightness-low" size={40} color="black" />
                        </View>
                    </View>
                    <View style={{width:100,height:'80%'}}>
                        <View style={{width:70,height:30,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#000'}}>Structure</Text>
                        </View>
                        <View style={{width:70,height:70,borderRadius:35,borderColor:'#ccc',justifyContent:'center',alignItems:'center'}}>
                            <Feather name="triangle" size={40} color="black" />
                        </View>
                    </View>
                    <View style={{width:100,height:'80%'}}>
                        <View style={{width:70,height:30,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#000'}}>Adjust</Text>
                        </View>
                        <View style={{width:70,height:70,borderRadius:35,borderColor:'#ccc',justifyContent:'center',alignItems:'center'}}>
                            <Entypo name="adjust" size={40} color="black" />
                        </View>
                    </View>
                    <View style={{width:100,height:'80%'}}>
                        <View style={{width:70,height:30,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#000'}}>Brightness</Text>
                        </View>
                        <View style={{width:70,height:70,borderRadius:35,borderColor:'#ccc',justifyContent:'center',alignItems:'center'}}>
                            <MaterialIcons name="brightness-low" size={40} color="black" />
                        </View>
                    </View>
                    <View style={{width:100,height:'80%'}}>
                        <View style={{width:70,height:30,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#000'}}>Structure</Text>
                        </View>
                        <View style={{width:70,height:70,borderRadius:35,borderColor:'#ccc',justifyContent:'center',alignItems:'center'}}>
                            <Feather name="triangle" size={40} color="black" />
                        </View>
                    </View>
                </ScrollView>
                </View>
        </View>
     );
}
 
export default EditImage;