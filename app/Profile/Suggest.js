import React from 'react'
import { View, Text, Button, Image, FlatList} from 'react-native'
import {Dimensions} from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons'; 



const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

let SuggestedItems=[
    {
      username:'shanbe mag',
      name:'shanbe',
      Thumbnail:require('../../assets/posts/Thumbnail-1.jpg'),
    },
    {
      username:'varzesh3',
      name:'varzesh3',
      Thumbnail:require('../../assets/posts/Thumbnail-2.jpg'),
    },
    {
      username:'Tourism_iran',
      name:'iran',
      Thumbnail:require('../../assets/posts/Thumbnail-3.jpg'),
    },
    {
      username:'dehgardi',
      name:'dehgardi',
      Thumbnail:require('../../assets/posts/Thumbnail-4.jpg'),
    },
    {
      username:'shanbe mag',
      name:'shanbe',
      Thumbnail:require('../../assets/posts/Thumbnail-1.jpg'),
    },
    {
      username:'varzesh3',
      name:'varzesh3',
      Thumbnail:require('../../assets/posts/Thumbnail-2.jpg'),
    },
    {
      username:'Tourism_iran',
      name:'iran',
      Thumbnail:require('../../assets/posts/Thumbnail-3.jpg'),
    },
    {
      username:'dehgardi',
      name:'dehgardi',
      Thumbnail:require('../../assets/posts/Thumbnail-4.jpg'),
    },
    {
        username:'shanbe mag',
        name:'shanbe',
        Thumbnail:require('../../assets/posts/Thumbnail-1.jpg'),
      },
      {
        username:'varzesh3',
        name:'varzesh3',
        Thumbnail:require('../../assets/posts/Thumbnail-2.jpg'),
      },
      {
        username:'Tourism_iran',
        name:'iran',
        Thumbnail:require('../../assets/posts/Thumbnail-3.jpg'),
      },
      {
        username:'dehgardi',
        name:'dehgardi',
        Thumbnail:require('../../assets/posts/Thumbnail-4.jpg'),
      }
  ];

const Suggest = () => {

    return ( 
        <View style={{paddingTop: 5, paddingHorizontal: 10, flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{width:60,height:60,borderColor:'blue',borderWidth:0.5,justifyContent:'center',alignItems:'center',borderRadius:30}}>
                    <Entypo name="facebook" size={24} color="blue" />
                </View>
                <View >
                    <Text style={{fontSize:14}}>Connect To Facebook</Text>
                    <Text note style={{fontSize:12}}>Follow Your Friends</Text>
                </View>
                <View style={{width: 100}}>
                    <Button
                        title='connect'
                    />
                </View>
            </View>

            <FlatList
                data={SuggestedItems}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item})=> (
                    <> 
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 5}}>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Image
                                    style={{ borderWidth: 2, width: 60, height: 60, borderRadius: 30}}
                                    source={item.Thumbnail}
                                />
                            </View>
                            <View >
                                <Text style={{fontSize:14}}> {item.username} </Text>
                                <Text note style={{fontSize:13}}> {item.name} </Text>
                                <Text note style={{fontSize:12}}>New in Instagram</Text>
                            </View>
                            <View style={{flexDirection: "row", alignItems: "center", width: 100}}>
                                <Button
                                    title='follow'
                                />
                                <MaterialIcons name="more-vert" size={24} color="black" />
                            </View>
                        </View>
                    
                    </>
                )}
            />
        </View>
     );
}
 
export default Suggest;

