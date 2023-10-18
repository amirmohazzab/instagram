import React from 'react'
import {View, Text, Image, ScrollView} from 'react-native'
import {Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Following = () => {
    return ( 
        <View style={{flex: 1}}>
            <ScrollView>   
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center", paddingLeft: 15}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70, borderRadius: 35}}
                        source={require('../../assets/posts/Thumbnail-3.jpg')}
                    />
                </View>
                <View style={{width: 0.75*screenWidth, alignItems: "flex-start", justifyContent: "center", height: 100, paddingLeft: 20}}>
                    <Text> piter liked 3 posts</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image
                            style={{ borderWidth: 2, width: 70, height: 70}}
                            source={require('../../assets/posts/3.jpg')}
                        />
                        <Image
                            style={{ borderWidth: 2, width: 70, height: 70}}
                            source={require('../../assets/posts/4.jpg')}
                        />
                        <Image
                            style={{ borderWidth: 2, width: 70, height: 70}}
                            source={require('../../assets/posts/5.jpg')}
                        />
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center", paddingLeft: 15}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70, borderRadius: 35}}
                        source={require('../../assets/posts/Thumbnail-3.jpg')}
                    />
                </View>
                <View style={{width: 0.75*screenWidth, alignItems: "flex-start", justifyContent: "center", height: 100, paddingLeft: 20}}>
                    <Text style={{fontSize:14, color: "black", fontWeight: "bold"}}> toplearn.com starts following sara </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center", paddingLeft: 10}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70, borderRadius: 35}}
                        source={require('../../assets/posts/Thumbnail-3.jpg')}
                    />
                </View>
                <View style={{width: 0.5*screenWidth, flexDirection: "row", alignItems: "center", justifyContent: "center", height: 100}}>
                    <Text style={{fontSize:14, color: "black", fontWeight: "bold"}}> toplearn.com liked adriana's post </Text>
                </View>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center"}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70}}
                        source={require('../../assets/posts/2.jpg')}
                    />
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center", paddingLeft: 15}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70, borderRadius: 35}}
                        source={require('../../assets/posts/Thumbnail-3.jpg')}
                    />
                </View>
                <View style={{width: 0.60*screenWidth, alignItems: "flex-start", justifyContent: "center", height: 100, paddingLeft: 20}}>
                    <Text> piter liked 3 posts</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image
                            style={{ borderWidth: 2, width: 70, height: 70}}
                            source={require('../../assets/posts/3.jpg')}
                        />
                        <Image
                            style={{ borderWidth: 2, width: 70, height: 70}}
                            source={require('../../assets/posts/4.jpg')}
                        />
                        <Image
                            style={{ borderWidth: 2, width: 70, height: 70}}
                            source={require('../../assets/posts/5.jpg')}
                        />
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center", paddingLeft: 15}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70, borderRadius: 35}}
                        source={require('../../assets/posts/Thumbnail-3.jpg')}
                    />
                </View>
                <View style={{width: 0.60*screenWidth, alignItems: "flex-start", justifyContent: "center", height: 100, paddingLeft: 20}}>
                    <Text style={{fontSize:14, color: "black", fontWeight: "bold"}}> toplearn.com starts following sara </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center", paddingLeft: 10}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70, borderRadius: 35}}
                        source={require('../../assets/posts/Thumbnail-3.jpg')}
                    />
                </View>
                <View style={{width: 0.5*screenWidth, flexDirection: "row", alignItems: "center", justifyContent: "center", height: 100}}>
                    <Text style={{fontSize:14, color: "black", fontWeight: "bold"}}> toplearn.com liked adriana's post </Text>
                </View>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center"}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70}}
                        source={require('../../assets/posts/2.jpg')}
                    />
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center", paddingLeft: 15}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70, borderRadius: 35}}
                        source={require('../../assets/posts/Thumbnail-3.jpg')}
                    />
                </View>
                <View style={{width: 0.60*screenWidth, alignItems: "flex-start", justifyContent: "center", height: 100, paddingLeft: 20}}>
                    <Text> piter liked 3 posts</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image
                            style={{ borderWidth: 2, width: 70, height: 70}}
                            source={require('../../assets/posts/3.jpg')}
                        />
                        <Image
                            style={{ borderWidth: 2, width: 70, height: 70}}
                            source={require('../../assets/posts/4.jpg')}
                        />
                        <Image
                            style={{ borderWidth: 2, width: 70, height: 70}}
                            source={require('../../assets/posts/5.jpg')}
                        />
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center", paddingLeft: 15}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70, borderRadius: 35}}
                        source={require('../../assets/posts/Thumbnail-3.jpg')}
                    />
                </View>
                <View style={{width: 0.60*screenWidth, alignItems: "flex-start", justifyContent: "center", height: 100, paddingLeft: 20}}>
                    <Text style={{fontSize:14, color: "black", fontWeight: "bold"}}> toplearn.com starts following sara </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center", paddingLeft: 10}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70, borderRadius: 35}}
                        source={require('../../assets/posts/Thumbnail-3.jpg')}
                    />
                </View>
                <View style={{width: 0.5*screenWidth, flexDirection: "row", alignItems: "center", justifyContent: "center", height: 100}}>
                    <Text style={{fontSize:14, color: "black", fontWeight: "bold"}}> toplearn.com liked adriana's post </Text>
                </View>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center"}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70}}
                        source={require('../../assets/posts/2.jpg')}
                    />
                </View>
            </View>
            </ScrollView>
        </View>
    )
};

export default Following;