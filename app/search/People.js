import React from 'react'
import { View, Text, Image, FlatList} from 'react-native'
import {Dimensions} from 'react-native';



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

const People = () => {

    return ( 
        <View style={{paddingTop: 5, paddingHorizontal: 10, flex: 1}}>
            
            <FlatList
                data={SuggestedItems}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item})=> (
                    <> 
                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 5}}>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                <Image
                                    style={{ borderWidth: 2, width: 60, height: 60, borderRadius: 30}}
                                    source={item.Thumbnail}
                                />
                            </View>
                            <View style={{marginLeft: 20}}>
                                <Text style={{fontSize:14}}> {item.username} </Text>
                                <Text note style={{fontSize:13}}> {item.name} </Text>
                                <Text note style={{fontSize:12}}>New in Instagram</Text>
                            </View>
                        </View>
                    
                    </>
                )}
            />
        </View>
     );
}
 
export default People;

