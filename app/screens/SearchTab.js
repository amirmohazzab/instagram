import React, {useState} from 'react'
import { View, ScrollView, SafeAreaView, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {Header} from 'react-native-elements'
import { Ionicons, MaterialIcons, AntDesign} from '@expo/vector-icons';
import {Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import ImageElement from '../search/ImageElement';
import ImageStories from './../components/ImageStories';
import {imageData} from '../components/data'


const {width: screenWidth, height: screenHeight} = Dimensions.get('window');



const SearchTab = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalImage, setModalImage] = useState(require('../../assets/posts/1.jpg'));
    const [images, setImages] = useState(imageData);

    const modalImageVisible = (visible, imageKey) => {
        setModalImage(imageData[imageKey]);
        setModalVisible(visible);
    }

    renderSectionOne = () => {
        return imageData.map((image, index) => {
            return (
                <TouchableWithoutFeedback key={index} onLongPress={() => modalImageVisible(true, index)}>
                    <View
                        style={[
                            { width: screenWidth / 3 },
                            { height: screenWidth / 3 },
                            { marginBottom: 2 },
                            index % 3 !== 0
                                ? { paddingLeft: 2 }
                                : { paddingLeft: 0 }
                        ]}
                    >
                        <Image
                            source={image}
                            style={{
                                flex: 1,
                                width: undefined,
                                height: undefined
                            }}
                        />
                    </View>
                </TouchableWithoutFeedback>
            );
        });
    };

    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Header
                leftComponent={ <Ionicons name="ios-search" size={30} color="black" onPress={() => navigation.navigate('SearchTopTab')}/> }
                centerComponent={{ text: 'Search', style: { color: '#000', fontSize: 20, fontWeight: "bold"} }}
                containerStyle={{
                    backgroundColor: 'white',
                    justifyContent: 'space-around',
                }}
            />
            <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center"}}>
               <SafeAreaView>   
                    <View style={{ height: 120}}>
                        <View style={{ flex: 1 }}>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5
                                }}
                            >

                                <View style={{justifyContent: "center"}}> 
                                    <Image
                                        style={{
                                            marginHorizontal: 5,
                                            borderColor: 'pink',
                                            borderWidth: 2,
                                            width: 80,
                                            height: 80,
                                            borderRadius: 40
                                        }}
                                        source={require('../../assets/thumbnailStories/Thumbnail-1.jpg')}
                                    />
                                    <View style={{position:'absolute',width:30,height:20,backgroundColor:'red',bottom:20, right: 31, borderRadius:3,borderColor:'#FFF',borderWidth:3,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{color:'#FFF',fontSize:9}}>LIVE</Text>
                                    </View>
                                    <Text style={{color:'#000', paddingTop:0, textAlign: "center", fontSize: 16}}>LIVE</Text>
                                </View>
                                <View style={{justifyContent: "center"}}> 
                                    <Image
                                        style={{
                                            marginHorizontal: 5,
                                            borderColor: 'pink',
                                            borderWidth: 2,
                                            width: 80,
                                            height: 80,
                                            borderRadius: 40
                                        }}
                                        source={require('../../assets/thumbnailStories/Thumbnail-2.jpg')}
                                    />
                                    <View style={{position:'absolute',width:25,height:25,backgroundColor:'red',color: "white", bottom:13, borderRadius:13,borderColor:'#FFF',borderWidth:3,justifyContent:'center',alignItems:'center',right:10}}>   
                                        <MaterialIcons name="location-on" size={16} style={{color: "#FFF"}} />
                                    </View>
                                    <Text style={{textAlign: "center", fontSize: 16}}> Location </Text>
                                </View>

                                <ImageStories name="Highlight" />
                            
                            </ScrollView>
                        </View>
                    </View>
                   
                    <View style={{height: 200}}> 
                        <View style={{flex: 1, flexDirection: "row"}}>
                            <View style={{flex: 1, height: 200}}>
                                <View style={{height: 100}}>
                                    <Image 
                                        source={require('../../assets/posts/4.jpg')}
                                        style={{width: "100%", height: "100%"}}
                                    />
                                </View>
                                <View style={{height: 100, marginTop: 2}}>
                                    <Image 
                                        source={require('../../assets/posts/3.jpg')}
                                        style={{width: "100%", height: "100%"}}
                                    />
                                </View>
                            </View>
                            <View style={{flex: 2, height: 200, marginLeft: 2}}>
                                <Image 
                                    source={require('../../assets/posts/3.jpg')}
                                    style={{width: "100%", height: "100%"}}
                                />

                                <View style={{width:30,height:30,borderColor:'#FFF',borderRadius:15,borderWidth:2,position:'absolute',justifyContent:'center',alignItems:'center',left:10,top:10}}>
                                    <AntDesign name="playcircleo" size={24} color="white" />
                                </View>
                                <View style={{width:'100%',height:60,position:'absolute',bottom:0}}>
                                    <Text style={{color:'white',paddingLeft:10,fontWeight:'bold'}}>Watch</Text>
                                    <Text style={{color:'white',paddingLeft:10,fontWeight:'bold'}}>Watch You Might Like</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                    <ScrollView>  
                        <View style={{flex: 1, backgroundColor:'#FFF', flexDirection: "row", flexWrap: "wrap", marginTop: 2 }}>
                            <Modal 
                                isVisible={modalVisible}
                                onBackdropPress={() => setModalVisible(false)}
                                backgroundColor="black"
                                style={{flex:1, backgroundColor:'transparent'}}
                            >
                                <View style={{ flex:1, backgroundColor:'transparent'}}>
                                    <ImageElement ImageSource={modalImage} />
                                </View>
                            </Modal>
                            {renderSectionOne()}
                        </View>
                    </ScrollView>
                    </SafeAreaView>
            </View>
        </View>
     );
}
 
export default SearchTab;