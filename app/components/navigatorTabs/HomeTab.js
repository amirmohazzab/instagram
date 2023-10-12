import React from 'react'
import { View, ScrollView, SafeAreaView, Image, Text} from 'react-native';
import {Header} from 'react-native-elements'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import InstagramCard from '../InstagramCard';



const HomeTab = () => {
    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Header
                leftComponent={ <AntDesign name="camera" size={30} color="black" /> }
                centerComponent={{ text: 'Instagram', style: { color: '#000', fontSize: 20, fontWeight: "bold"} }}
                rightComponent={ <FontAwesome name="send" size={24} color="black" /> }
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
                        <View style={{ flex: 3 }}>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5
                                }}
                            >
                                <Image
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: 'pink',
                                        borderWidth: 2,
                                        width: 80,
                                        height: 80,
                                        borderRadius: 40
                                    }}
                                    source={require('../../../assets/Stories/1.jpg')}
                                />
                                <Image
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: 'pink',
                                        borderWidth: 2,
                                        width: 80,
                                        height: 80,
                                        borderRadius: 40
                                    }}
                                    source={require('../../../assets/Stories/2.jpg')}
                                />
                                <Image
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: 'pink',
                                        borderWidth: 2,
                                        width: 80,
                                        height: 80,
                                        borderRadius: 40
                                    }}
                                    source={require('../../../assets/Stories/6.png')}
                                />
                                <Image
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: 'pink',
                                        borderWidth: 2,
                                        width: 80,
                                        height: 80,
                                        borderRadius: 40
                                    }}
                                    source={require('../../../assets/Stories/3.jpg')}
                                />
                                <Image
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: 'pink',
                                        borderWidth: 2,
                                        width: 80,
                                        height: 80,
                                        borderRadius: 40
                                    }}
                                    source={require('../../../assets/Stories/4.jpg')}
                                />
                                <Image
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: 'pink',
                                        borderWidth: 2,
                                        width: 80,
                                        height: 80,
                                        borderRadius: 40
                                    }}
                                    source={require('../../../assets/Stories/5.jpg')}
                                />
                                <Image
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: 'pink',
                                        borderWidth: 2,
                                        width: 80,
                                        height: 80,
                                        borderRadius: 40
                                    }}
                                    source={require('../../../assets/Stories/6.jpg')}
                                />
                                <Image
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: 'pink',
                                        borderWidth: 2,
                                        width: 80,
                                        height: 80,
                                        borderRadius: 40
                                    }}
                                    source={require('../../../assets/Stories/7.jpg')}
                                />
                            </ScrollView>
                        </View>
                    </View>
                    <ScrollView>
                        <InstagramCard imageSource= "img1" likes= "200" />
                        <InstagramCard imageSource= "img2" likes= "350" />
                        <InstagramCard imageSource= "img3" likes= "400" />
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
     );
}
 
export default HomeTab;