import React from 'react'
import {View, Text, Image, ScrollView} from 'react-native'
import {Dimensions} from 'react-native';
import {Badge} from '@rneui/themed'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const You = () => {
    return ( 
        <View style={{flex: 1}}>
            <ScrollView>    
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center"}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70, borderRadius: 35}}
                        source={require('../../assets/posts/Thumbnail-3.jpg')}
                    />
                    <Badge
                        status="error"
                        containerStyle={{ position: 'absolute', top: 12, left: 60 }}
                        value={39}
                        size="large"
                    />
                </View>
                <View style={{width: 0.75*screenWidth, alignItems: "flex-start", justifyContent: "center", height: 100}}>
                    <Text style={{fontSize:14, color: "black", fontWeight: "bold"}}> Follow Reuest</Text>
                    <Text note style={{fontSize:12, color: 'grey'}}> Approve or Ignore Rrquest </Text>
                </View>
            </View>
            <View style={{paddingLeft: 10, paddingVertical: 10}}>
                <Text style={{fontWeight: "bold", fontSize: 20}}> Activity </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center", paddingLeft: 30}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70, borderRadius: 35}}
                        source={require('../../assets/posts/Thumbnail-3.jpg')}
                    />
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70, borderRadius: 35, marginLeft: -45, marginTop: 35}}
                        source={require('../../assets/posts/Thumbnail-4.jpg')}
                    />
                </View>
                <View style={{width: 0.50*screenWidth, alignItems: "flex-start", justifyContent: "center", height: 100, paddingLeft: 20}}>
                    <Text style={{fontSize:14, color: "black", fontWeight: "bold"}}> Alex, Sara, John </Text>
                    <Text note style={{fontSize:14, color: 'grey'}}> and 83 others </Text>
                    <Text note style={{fontSize:12, color: 'grey'}}> liked your post </Text>
                </View>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center"}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70}}
                        source={require('../../assets/posts/3.jpg')}
                    />
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
                    <Text style={{fontSize:14, color: "black", fontWeight: "bold"}}> toplearn.com </Text>
                    <Text note style={{fontSize:12, color: 'grey'}}> liked Your Photo </Text>
                </View>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center"}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70}}
                        source={require('../../assets/posts/3.jpg')}
                    />
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center", paddingLeft: 10}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70, borderRadius: 35}}
                        source={require('../../assets/posts/Thumbnail-3.jpg')}
                    />
                </View>
                <View style={{width: 0.5*screenWidth, height: 100, justifyContent: "center", alignItems: "flex-start"}}>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                        <Text style={{fontSize:14, color: "black", fontWeight: "bold"}}> toplearn.com </Text>
                        <Text note style={{fontSize:12, color: 'grey'}}> mentioned </Text>
                    </View>
                    <Text note style={{fontSize:12, color: 'grey'}}> you in a comment: </Text>
                    <Text note style={{fontSize:12, color: 'blue'}}> @toplearn.com </Text>
                </View>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center"}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70}}
                        source={require('../../assets/posts/3.jpg')}
                    />
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
                    <Text style={{fontSize:14, color: "black", fontWeight: "bold"}}> toplearn.com </Text>
                    <Text note style={{fontSize:12, color: 'grey'}}> liked Your Photo </Text>
                </View>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center"}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70}}
                        source={require('../../assets/posts/3.jpg')}
                    />
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center", paddingLeft: 10}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70, borderRadius: 35}}
                        source={require('../../assets/posts/Thumbnail-3.jpg')}
                    />
                </View>
                <View style={{width: 0.5*screenWidth, height: 100, justifyContent: "center", alignItems: "flex-start"}}>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                        <Text style={{fontSize:14, color: "black", fontWeight: "bold"}}> toplearn.com </Text>
                        <Text note style={{fontSize:12, color: 'grey'}}> mentioned </Text>
                    </View>
                    <Text note style={{fontSize:12, color: 'grey'}}> you in a comment: </Text>
                    <Text note style={{fontSize:12, color: 'blue'}}> @toplearn.com </Text>
                </View>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center"}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70}}
                        source={require('../../assets/posts/3.jpg')}
                    />
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
                    <Text style={{fontSize:14, color: "black", fontWeight: "bold"}}> toplearn.com </Text>
                    <Text note style={{fontSize:12, color: 'grey'}}> liked Your Photo </Text>
                </View>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center"}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70}}
                        source={require('../../assets/posts/3.jpg')}
                    />
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center", paddingLeft: 10}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70, borderRadius: 35}}
                        source={require('../../assets/posts/Thumbnail-3.jpg')}
                    />
                </View>
                <View style={{width: 0.5*screenWidth, height: 100, justifyContent: "center", alignItems: "flex-start"}}>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                        <Text style={{fontSize:14, color: "black", fontWeight: "bold"}}> toplearn.com </Text>
                        <Text note style={{fontSize:12, color: 'grey'}}> mentioned </Text>
                    </View>
                    <Text note style={{fontSize:12, color: 'grey'}}> you in a comment: </Text>
                    <Text note style={{fontSize:12, color: 'blue'}}> @toplearn.com </Text>
                </View>
                <View style={{width: 0.25*screenWidth, flexDirection: "row", height: 100, alignItems: 'center', justifyContent: "center"}}> 
                    <Image
                        style={{ borderWidth: 2, width: 70, height: 70}}
                        source={require('../../assets/posts/3.jpg')}
                    />
                </View>
            </View>
            </ScrollView>
        </View>
     );
}
 
export default You;