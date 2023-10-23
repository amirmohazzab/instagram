import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, Image} from 'react-native';
import {Header} from 'react-native-elements'
import {Ionicons, FontAwesome} from '@expo/vector-icons'
import { GiftedChat } from 'react-native-gifted-chat'
import {Dimensions} from 'react-native';


const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Chat = ({navigation, route}) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ])
      }, [])
    
      const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages),
        )
      }, [])


    const {userName, Thumbnail} = route.params

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>   
            <Header
                leftComponent={ <FontAwesome name="long-arrow-left" size={30} color="grey" onPress={() => navigation.goBack()}/>}
                centerComponent={
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image 
                            source={Thumbnail} 
                            style={{
                                marginHorizontal: 5,
                                borderColor: 'pink',
                                borderWidth: 2,
                                width: 60,
                                height: 60,
                                borderRadius: 30
                            }}
                        />
                        <Text style={{paddingBottom:10}}> {userName} </Text>
                    </View>
                }
                rightComponent={ <Ionicons name="ios-videocam-outline" size={30} color="grey" /> }
                containerStyle={{
                    backgroundColor: 'white',
                    justifyContent: 'space-around',
                    height: 120
                }}
            />
            <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center"}}>
                <GiftedChat
                    textInputStyle={{}}
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    user={{
                        _id: 1,
                        avatar: 'https://placeimg.com/140/140/any',
                    }}
                />
            </View>
        </View>
    )
}


export default Chat;
