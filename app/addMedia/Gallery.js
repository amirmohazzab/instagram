import React, {useState} from 'react'
import {View, Image, ScrollView, TouchableWithoutFeedback, Text} from 'react-native'
import {Header} from 'react-native-elements'
import { Dimensions } from 'react-native';
import {Ionicons, AntDesign, Foundation, MaterialIcons} from 'react-native-vector-icons';
import {imageData} from '../components/data'


const {width: screenWidth, height: screenHeight} = Dimensions.get('window');


const Gallery = ({navigation}) => {

    const [source, setSource] = useState(require('../../assets/posts/3.jpg'));
    const [show, setShow] = useState(false);


    renderGallery = () => {
        return imageData.map((image, index) => {
            return (
                <View
                    key={index}
                    style={[
                        { width: screenWidth / 4 },
                        { height: screenWidth / 4 },
                        { marginBottom: 2 },
                        index % 4 !== 0
                            ? { paddingLeft: 2 }
                            : { paddingLeft: 0 }
                    ]}
                >
                    <TouchableWithoutFeedback onPress={() => setSource(image)}>
                        <Image
                            source={image}
                            style={{
                                flex: 1,
                                width: undefined,
                                height: undefined
                            }}
                        />
                    </TouchableWithoutFeedback>
                </View>
            );
        });
    };


    const renderBox = () => {
        if (show) {
            return (
                <View style={{width: 140, backgroundColor: "#FFF", zIndex: 10, left: 120, position: "absolute" }}>
                    <View style={{width: "100%", height: 40, padding: 5, justifyContent: "center", borderBottomWidth: 1, borderColor: "#ccc" }}>
                        <Text style={{fontSize: 20, color: "grey"}}> Gallery </Text>
                    </View>
                    <View style={{width: "100%", height: 40, padding: 5, justifyContent: "center", borderBottomWidth: 1, borderColor: "#ccc" }}>
                        <Text style={{fontSize: 20, color: "grey"}}> Videos </Text>
                    </View>
                    <View style={{width: "100%", height: 40, padding: 5, justifyContent: "center", borderBottomWidth: 1, borderColor: "#ccc" }}>
                        <Text style={{fontSize: 20, color: "grey"}}> Telegram </Text>
                    </View>
                    <View style={{width: "100%", height: 40, padding: 5, justifyContent: "center", borderBottomWidth: 1, borderColor: "#ccc" }}>
                        <Text style={{fontSize: 20, color: "grey"}}> Whats app images</Text>
                    </View>
                </View>
            )
        } else return null;
    };

    return ( 
        <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center"}}>
            <Header
                leftComponent={ <AntDesign name="close" size={30} color="black" onPress={() => navigation.goBack()}/> }
                centerComponent={
                    <TouchableWithoutFeedback onPress={() => setShow(!show)}>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Text style = {{fontSize: 24, color: '#000'}}> Gallery </Text>
                            <MaterialIcons name="arrow-drop-down" size={24} />
                        </View>
                    </TouchableWithoutFeedback>
                }
                containerStyle={{
                    backgroundColor: 'white',
                    justifyContent: 'space-around',
                }}
            />
            <View style={{flex: 1, backgroundColor: "FFF"}}>
                {renderBox()}
                <View style={{height: screenHeight/2, width: screenWidth, backgroundColor: 'transparent'}}>
                    <Image 
                        source={source}
                        style={{width: "100%", height: "100%"}}
                    />
                    <View style={{width: "100%", height: 50, position: "absolute", backgroundColor: "transparent", bottom: 0, flexDirection: "row"}}>
                        <View style={{width: "15%", height: "100%", position: "absolute", backgroundColor: "transparent", left: 0, justifyContent: "center", alignItems: "center"}}>
                            <View style={{width: 40, height: 40, justifyContent: "center", alignItems: "center", backgroundColor: "black", borderRadius: 20}}>
                                <Ionicons name="ios-resize" size={20} style={{color: "#fff", justifyContent: "center", alignItems: "center" }} />
                            </View>
                        </View>
                        <View style={{width: "45%", height: "100%", position: "absolute", backgroundColor: "transparent", right: 0, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>
                            <View style={{width: 40, height: 40, justifyContent: "center", alignItems: "center", backgroundColor: "black", borderRadius: 20}}>
                                <Ionicons name="ios-infinite" size={20} style={{color: "#fff", justifyContent: "center", alignItems: "center"}} />
                            </View>
                            <View style={{width: 40, height: 40, justifyContent: "center", alignItems: "center", backgroundColor: "black", borderRadius: 20}}>
                                <Ionicons name="logo-buffer" size={20} style={{color: "#fff", justifyContent: "center", alignItems: "center"}} />
                            </View>
                            <View style={{width: 40, height: 40, justifyContent: "center", alignItems: "center", backgroundColor: "black", borderRadius: 20}}>
                                <Foundation name="page-multiple" size={20} style={{color: "#fff", justifyContent: "center", alignItems: "center" }} />
                            </View>
                        </View>
                    </View>
                </View>
                    <ScrollView >
                    <View style={{flex: 1, backgroundColor:'#FFF', flexDirection: "row", flexWrap: "wrap", marginTop: 2}}>
                    {renderGallery()}
                    </View>
                    </ScrollView>
            </View>
        </View>
     );
}
 
export default Gallery;


