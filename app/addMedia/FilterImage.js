import React from 'react'
import {View, Text, Image, ScrollView} from 'react-native'
import {Dimensions} from 'react-native';
import Constans from 'expo-constants'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');



const FilterImage = () => {
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
                    <View>
                    <Text style={{textAlign:'center',color:'#000'}}>Normal</Text>
                    <Image source={require('../../assets/posts/3.jpg')} style={{marginHorizontal:4,borderWidth:2,width:180,height:'80%'}} />
                    </View>

                    <View>
                    <Text style={{textAlign:'center',color:'#000'}}>Moon</Text>
                    <Image source={require('../../assets/posts/3.jpg')} style={{marginHorizontal:4,borderWidth:2,width:180,height:'80%'}} />
                    </View>

                    <View>
                    <Text style={{textAlign:'center',color:'#000'}}>Dark</Text>
                    <Image source={require('../../assets/posts/3.jpg')} style={{marginHorizontal:4,borderWidth:2,width:180,height:'80%'}} />
                    </View>

                </ScrollView>
                </View>
        </View>
     );
}
 
export default FilterImage;