import React, {useState} from 'react'
import { View, Image, Text, SafeAreaView, ScrollView} from 'react-native';
import {Button} from '@rneui/themed';
import {Icon} from 'react-native-elements';
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import Constans from 'expo-constants'
import {Dimensions} from 'react-native';
import InstagramCard from '../components/InstagramCard';
import ProfileBookmark from '../Profile/ProfileBookmark';




const {width: screenWidth, height: screenHeight} = Dimensions.get('window');


const images = [
    require('../../assets/feed/1.jpg'),
    require('../../assets/feed/3.jpg'),
    require('../../assets/feed/4.jpg'),
    require('../../assets/feed/5.jpg'),
    require('../../assets/feed/6.jpg'),
    require('../../assets/feed/7.jpg'),
    require('../../assets/feed/8.jpg'),
    require('../../assets/feed/9.jpg'),
    require('../../assets/feed/10.jpg'),
    require('../../assets/feed/11.jpg'),
    require('../../assets/feed/1.jpg'),
    require('../../assets/feed/3.jpg'),
    require('../../assets/feed/4.jpg'),
];

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

const ProfileTab = ({navigation}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [show, setShow] = useState(false);

    const handleClicked = index => setActiveIndex(index);


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
        } else if (activeIndex === 2) {
            return (
                <View style={{flex: 1}}>
                    <ProfileBookmark />
                </View>
            )
        }
    };

const renderBoxAccount = () => {
    if (show) {
        return (
            <View style={{justifyContent: "center", alignItems: "flex-start", backgroundColor: "#FFF", zIndex: 5, position: "absolute", width: screenWidth}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "90%", paddingVertical: 5, borderBottomWidth: 1, borderColor: "#ccc", paddingLeft: 20}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: 0.4*screenWidth}}>
                        <Image
                            style={{ borderWidth: 2, width: 60, height: 60, borderRadius: 30}}
                            source={require('../../assets/photo.jpg')}
                        />
                        <Text style={{fontSize:16, marginLeft: 10}}> ah_mohazab2023 </Text>                
                    </View>
                    <View >
                        <MaterialIcons name="check-circle" size={24} color="dodgerblue" />
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderColor: "#ccc", paddingLeft: 40}}>
                    <View >
                        <MaterialIcons name="add" size={24} color="black" />
                    </View>
                    <View style={{marginLeft: 30}}>
                        <Text style={{fontSize:14}}> Add Account </Text>
                    </View>
                </View>
                
            </View>
        ) 
    } else {
        return null
    }
}

    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"  }}>
            <View 
                style={{flexDirection: 'row', justifyContent: 'space-between', 
                        marginTop: Constans.statusBarHeight, height: 50, alignItems: 'center', backgroundColor: 'white'}}
            >
                        <View style={{flexDirection: 'row', flex: 1.5, alignItems: "center"}}>
                            <Text style={{fontSize: 20}}> ah_mohazab2023 </Text>
                            <Icon 
                                name="arrow-drop-down"
                                type="MaterialIcon"
                                color="black"
                                onPress={() => setShow(!show)}
                            />
                        </View>
                <View style={{flex: 0.5, flexDirection: "row", justifyContent: 'space-between', alignItems: "center"}}>
                        <Entypo name="back-in-time" size={28} color="black" />
                        <Ionicons name="person-add" size={28} color="black" onPress={() => navigation.navigate('SuggestTopTab')}/>
                        <Entypo name="dots-three-vertical" size={28} color="black" onPress={() => navigation.navigate('Setting')} /> 
                </View>
            </View>
            <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center", width: screenWidth}}>
            
                <View style={{paddingTop: 10}}>
                {renderBoxAccount()}
                    <View style={{flexDirection: 'row'}}>
                        <View style={{alignItems: 'center', width: 0.25*screenWidth, marginLeft: 10}}>
                            <Image 
                                source={require('../../assets/photo.jpg')}
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
                                    onPress={() => navigation.navigate('Edit')}
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
                                name: 'bookmark-outline', 
                                type: 'Ionicons', 
                                size: 30, 
                                color: activeIndex === 2 ? 'black' : 'grey'
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

            


