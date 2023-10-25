import React, {useState} from 'react'
import { View, ScrollView, SafeAreaView, Text, FlatList} from 'react-native';
import {Header} from 'react-native-elements'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Modal from 'react-native-modal'
import InstagramCard from '../components/InstagramCard';
import ImageStories from '../components/ImageStories';
import { dataSet } from './../components/data';


    
const HomeTab = ({navigation}) => {

    const [name, setName] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [cardItems, setCardItems] = useState(dataSet);

    const showModal = (name) => {
        setIsModalVisible(!isModalVisible);
        setName(name);
    };

    const addLike = (item) => {
        const newData = [...cardItems];
        newData[item.id].likePost = !cardItems[item.id].likePost;
        setCardItems([...cardItems, newData])
    }

    const showComments = (item) => {
        navigation.navigate('Comment', {
            caption: item.caption,  username:item.username, Thumbnail:item.Thumbnail
        })}

    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Header
                leftComponent={ <AntDesign name="camera" size={30} color="black" onPress={() => {navigation.navigate('Camera')}} /> }
                centerComponent={{ text: 'Instagram', style: { color: '#000', fontSize: 20, fontWeight: "bold"} }}
                rightComponent={ <FontAwesome name="send" size={24} color="black" onPress={() => navigation.navigate('Direct')} /> }
                containerStyle={{
                    backgroundColor: 'white',
                    justifyContent: 'space-around',
                }}
            />
            <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center"}}>
                <SafeAreaView>
                    <View style={{ height: 120}}>
                        <View 
                            style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', 
                            alignItems: 'center', paddingHorizontal: 7}}
                        >
                            <Text style={{ fontWeight: 'bold' }}>Stories</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <FontAwesome name="play" size={14} color="black" />
                                <Text style={{ fontWeight: 'bold' }}>
                                    Watch All
                                </Text>
                            </View>
                        </View>
                        <View style={{ flex: 3, justifyContent: "center", alignItems: "center"}}>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5,
                                }}
                            >
                                <ImageStories />
                               
                            </ScrollView>
                        </View>
                    </View>
                    <ScrollView>
                        <FlatList
                            data={cardItems}
                            keyExtractor = {(item, index) => index.toString()}
                            renderItem={({item})=>
                            <InstagramCard
                                username = {item.username}
                                location = {item.location}
                                Thumbnail = {item.Thumbnail}
                                image = {item.image}
                                likes = {item.likes}
                                comments={item.comments}
                                caption = {item.caption}
                                showModal = {() => showModal(item.username)}
                                likePost = {item.likePost}
                                addLike = {() => addLike(item)}
                                showComments = {() => showComments(item)}
                            />
                        }
                        />
                        <Modal
                            isVisible={isModalVisible}
                            onBackdropPress={() => setIsModalVisible(false)}
                            backdropColor="black"
                        >
                            <View style={{alignItems:'flex-start',justifyContent:'flex-start',backgroundColor:'#FFF',borderRadius:5 }}>
                                <View style={{borderRadius:5}}>
                                    <Text style={{padding:10}}>
                                        Report {name}
                                    </Text>
                                    <Text style={{padding:10}}>
                                        Copy Link
                                    </Text>
                                    <Text style={{padding:10}}>
                                        Turn on post notification
                                    </Text>
                                    <Text style={{padding:10}}>
                                        Share in Whatsapp
                                    </Text>
                                    <Text style={{padding:10}}>
                                        Unfllow
                                    </Text>
                                    <Text style={{padding:10}}>
                                        Mute
                                    </Text>
                                </View>
                            </View>
                        </Modal>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
     );
}
 
export default HomeTab;