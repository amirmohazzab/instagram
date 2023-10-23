import React, {useState} from 'react'
import {View, Text, Button, Image, FlatList, TouchableOpacity} from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import {Icon} from 'react-native-vector-icons' 
import { Input} from 'react-native-elements';
import {Dimensions} from 'react-native';
import Constans from 'expo-constants'


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

let arrayHolder = [
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

  

const Direct = ({navigation}) => {

    const [text, setText] = useState('');
    const [dataSourse, setDataSourse] = useState(SuggestedItems);

    const searchFilter = (text) => {
      const newData = arrayHolder.filter(item => {
        return item.username.toUpperCase().indexOf(text.toUpperCase()) > -1
      });
      setDataSourse(newData);
      setText(text);
    }

    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <View 
                style={{flexDirection: 'row', justifyContent: 'space-between', 
                        marginTop: Constans.statusBarHeight, height: 50, alignItems: 'center', backgroundColor: 'white'}}
            >
                        <View style={{flexDirection: 'row', flex: 1, alignItems: "center"}}>
                            <Text style={{fontSize: 20, color: "grey", paddingLeft: 10}}> ah_mohazab2023 </Text>
                        </View>
                <View style={{flex: 1, flexDirection: "row", justifyContent: 'flex-end', alignItems: "center", paddingRight: 10}}>
                        <AntDesign name="plus" size={28} color="grey" />
                </View>
            </View>
            <View style={{borderTopWidth: 1, borderTopColor: '#ccc', width: screenWidth}} /> 
            <View style={{flex: 1, justifyContent: "flex-start", alignItems: "flex-start"}}>
                <Input
                    value = {text}
                    onChangeText={(text) => searchFilter(text) }
                    placeholder='search'
                    leftIcon={ <Ionicons name="ios-search" size={20} style={{marginHorizontal: 10, color: "#ccc" }} /> }
                    isFocused='true'
                    inputContainerStyle={{borderBottomWidth: 1, borderBottomColor: '#ccc', width: "100%", paddingVertical: 10}}
                />
            
            <View style={{flex: 1, paddingHorizontal: 10}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dataSourse}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item})=> (
                        <TouchableOpacity
                          onPress = {() => navigation.navigate('Chat', {
                            userName:item.username,Thumbnail:item.Thumbnail
                          })}
                        > 
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5, width: "100%"}}>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}> 
                                  <Image
                                    style={{ borderWidth: 2, width: 60, height: 60, borderRadius: 30}}
                                    source={item.Thumbnail}
                                  />
                                  <View style={{marginLeft: 20}}>
                                      <Text style={{fontSize:14}}> {item.username} </Text>
                                      <Text note style={{fontSize:13}}> {item.name} </Text>
                                  </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>    
        </View>
        </View>
     );
}
 
export default Direct;