import React, {useState} from 'react'
import { View, Image, Text, SafeAreaView, ScrollView} from 'react-native';
import {Button} from '@rneui/themed';
import { Header, Icon } from '@rneui/themed';
import { AntDesign, FontAwesome, MaterialIcons, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Constans from 'expo-constants'
import {Dimensions} from 'react-native';
import InstagramCard from '../InstagramCard';


const images = [
    require('../../../assets/feed/1.jpg'),
    require('../../../assets/feed/3.jpg'),
    require('../../../assets/feed/4.jpg'),
    require('../../../assets/feed/5.jpg'),
    require('../../../assets/feed/6.jpg'),
    require('../../../assets/feed/7.jpg'),
    require('../../../assets/feed/8.jpg'),
    require('../../../assets/feed/9.jpg'),
    require('../../../assets/feed/10.jpg'),
    require('../../../assets/feed/11.jpg'),
    require('../../../assets/feed/1.jpg'),
    require('../../../assets/feed/3.jpg'),
    require('../../../assets/feed/4.jpg'),
];


const {width: screenWidth, height: screenHeight} = Dimensions.get('window');


const ProfileTab = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const handleClicked = index => setActiveIndex(index);

    renderSectionOne = () => {
        return images.map((image, index) => {
            return (
                <View
                    key={index}
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
            );
        });
    };


    renderData = () => {
        if (activeIndex === 0) {
            return (
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                    {renderSectionOne()}
                </View>
            );
        } else if (activeIndex === 1) {
            return (
                <View style={{flex: 1}}>
                    <InstagramCard imageSource="img1" likes="200" />
                    <InstagramCard imageSource="img2" likes="350" />
                    <InstagramCard imageSource="img3" likes="400" />
                </View>
            );
        }
    };

    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center",  }}>
            <View 
                style={{flexDirection: 'row', justifyContent: 'space-between', 
                        marginTop: Constans.statusBarHeight, height: 50, alignItems: 'center', backgroundColor: 'white'}}
            >
                <View style={{flexDirection: 'row', flex: 1.5, alignItems: "center"}}>
                        <Text style={{fontSize: 20}}> ah_mohazab2023 </Text>
                        <MaterialIcons name="arrow-drop-down" size={30} color="black" />
                </View>
                <View style={{flex: 0.5, flexDirection: "row", justifyContent: 'space-between', alignItems: "center"}}>
                        <Entypo name="back-in-time" size={28} color="black" />
                        <Ionicons name="person-add" size={28} color="black" />
                        <Entypo name="dots-three-vertical" size={28} color="black" /> 
                </View>
            </View>
            <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center", width: screenWidth}}>
                <View style={{paddingTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{alignItems: 'center', width: 0.25*screenWidth, marginLeft: 10}}>
                            <Image 
                                source={require('../../../assets/photo.jpg')}
                                style={{height: 100, width: 100, borderRadius: 50, marginLeft: 10}}
                            />
                        </View>
                        <View style={{width: 0.75*screenWidth}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 15}}> 20 </Text>
                                    <Text style={{fontSize: 15, color: 'grey'}}> posts </Text>
                                </View>

                                <View style={{alignItems: 'center'}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 15}}> 50 </Text>
                                    <Text style={{fontSize: 15, color: 'grey'}}> followers </Text>
                                </View>

                                <View style={{alignItems: 'center'}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 15}}> 20 </Text>
                                    <Text style={{fontSize: 15, color: 'grey'}}> following </Text>
                                </View>
                            </View>
                            <View style={{width: 0.75*screenWidth, paddingTop: 10}}>
                                <Button 
                                    title="Edit Profile" 
                                    titleStyle={{color: '#000'}}
                                    buttonStyle={{backgroundColor:  'transparent', height: 40, 
                                                  alignItems: 'center', justifyContent: 'center',
                                                  borderWidth: 1, borderColor: 'dark', marginHorizontal: 20
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{marginLeft: 10, paddingVertical: 10, paddingBottom: 10}}>
                        <Text style={{fontWeight: 'bold'}}> Amir Mohazzab </Text>
                        <Text> React developer </Text>
                        <Text> ahm.mohazzab@gmail.com </Text>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: 'grey', width: screenWidth}}>
                        <Button 
                            active = {activeIndex === 0}
                            onPress={() => handleClicked(0)}
                            buttonStyle={{backgroundColor:  'transparent'}}
                            icon={{
                                name: 'apps', 
                                type: 'MaterialCommunityIcons', 
                                size: 30, 
                                color: activeIndex === 0 ? 'black' : 'grey'
                            }}
                        />
                        <Button 
                            active = {activeIndex === 1}
                            onPress={() => handleClicked(1)}
                            buttonStyle={{backgroundColor:  'transparent'}}
                            icon={{
                                name: 'list', 
                                type: 'Fontawesome5', 
                                size: 30, 
                                color: activeIndex === 1 ? 'black' : 'grey'
                            }}
                        />
                        <Button 
                            active = {activeIndex === 2}
                            onPress={() => handleClicked(2)}
                            buttonStyle={{backgroundColor:  'transparent'}}
                            icon={{
                                name: 'people', 
                                type: 'Ionicons', 
                                size: 30, 
                                color: activeIndex === 2 ? 'black' : 'grey'
                            }}                            
                        />
                        <Button 
                            active = {activeIndex === 3}
                            onPress={() => handleClicked(3)}
                            buttonStyle={{backgroundColor:  'transparent'}}
                            icon={{
                                name: 'bookmark-outline', 
                                type: 'Ionicons', 
                                size: 30, 
                                color: activeIndex === 3 ? 'black' : 'grey'
                            }}
                        />
                    </View>
                    <View style={{flex: 1, marginBottom: 190}}>
                        <SafeAreaView >
                            <ScrollView>
                                {renderData()}
                            </ScrollView> 
                        </SafeAreaView>
                    </View>
                </View>
            </View>
        </View>
     );
}
 
export default ProfileTab;

            


