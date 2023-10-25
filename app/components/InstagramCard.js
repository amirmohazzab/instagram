import React, {useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import {Dimensions} from 'react-native';
import DoubleClick from 'rn-double-click'


const {width: screenWidth} = Dimensions.get('window');


const InstagramCard = ({username, location, Thumbnail, image, likes, comments, caption, showModal, likePost, addLike, showComments}) => {

    const [hasFocus, setHasFocus] = useState(false);

    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <View style={{width: "100%", backgroundColor: "grey", height: 1, marginBottom: 5}} />
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", padding: 10}}>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}>
                    <Image 
                        source={Thumbnail}
                        style={{height: 80, width: 80, borderRadius: 40}}
                    />
                    <View>
                        <Text> {username} </Text>
                        <Text> {location} </Text>
                    </View> 
                </View>
                <Button 
                    buttonStyle={{backgroundColor:  'transparent'}}
                    icon={{name: 'more-vertical', type: 'feather', size: 25, color: 'grey'}}
                    onPress={showModal}
                />
            </View>
            <DoubleClick onClick={addLike}>
                <View style={{}}>
                    <Image 
                        resizeMode='cover'
                        source={image}
                        style={{height: 200, width: 0.98*screenWidth}}
                    />
                </View>
            </DoubleClick>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <View style={{flexDirection: "row", alignItems: "center", flex: 3}}>
                    <Button 
                        buttonStyle={{backgroundColor:  'transparent'}}
                        icon={{name: likePost ? 'heart' : 'hearto', type: 'antdesign', size: 25, color: likePost ? "red" : "black"}}
                        onPress={addLike}
                    />
                    <Button 
                        buttonStyle={{backgroundColor:  'transparent'}}
                        icon={{name: 'comments', type: 'fontisto', size: 25, color: 'black'}}
                    />
                    <Button 
                        buttonStyle={{backgroundColor:  'transparent'}}
                        icon={{name: 'send', type: 'feather', size: 25, color: 'black'}}
                    />
                </View>
                <View style={{flexDirection: "row", flex: 1, justifyContent: "flex-end"}}>
                    <Button 
                        buttonStyle={{backgroundColor:  'transparent'}}
                        icon={{name: 'bookmark-outline', type: 'Ionicons', size: 30, color: 'black'}}
                    />
                </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "flex-start", width: "100%", paddingLeft: 10, paddingBottom: 10}}>
                <Text> {`${likes} Likes`} </Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10, justifyContent: "flex-start", width: "100%", paddingLeft: 10}}>
                <Text style={{fontWeight: "bold"}}> {username} </Text>
                <Text> {caption} </Text>
            </View>
            <View style={{alignItems: "flex-start", paddingVertical: 10, width: "90%", marginBottom: 10}}>
                <Text note style={{color: "grey", fontSize: 16}} onPress={showComments} >View all {comments} comments</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", paddingHorizontal: 10}}> 
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image
                        style={{
                            marginHorizontal: 5,
                            borderColor: 'pink',
                            borderWidth: 2,
                            width: 50,
                            height: 50,
                            borderRadius: 25
                        }}
                        source={image}
                    />
                    <TextInput
                        placeholder="Add a comment ..."
                        placeholderTextColor="#ccc"
                        style={{fontSize:18, marginLeft: 10}}
                        onFocus={() => setHasFocus(true)}
                    />
                </View>
                <View>
                {
                  hasFocus ?
                    <Text style={{color:'blue',fontSize:14,paddingRight:5}}>Post</Text>
                    :null
                }  
                </View>   
            </View>

            
          
              

            <View style={{width: "100%", backgroundColor: "grey", height: 1, marginTop: 20}} />
        </View>
       
     );
}
 
export default InstagramCard;