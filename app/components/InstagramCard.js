import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Dimensions} from 'react-native';


const {width: screenWidth} = Dimensions.get('window');


const InstagramCard = ({imageSource, likes}) => {

    const images = {
        img1: require('../../assets/1.jpg'),
        img2: require('../../assets/2.jpg'),
        img3: require('../../assets/3.jpg'),
    };

    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <View style={{width: "100%", backgroundColor: "grey", height: 1, marginBottom: 20}} />
            <View style={{flexDirection: "row", alignItems: "center", marginBottom: 15, justifyContent: "flex-start", marginLeft: -180}}>
                <Image 
                    source={require('../../assets/photo.jpg')}
                    style={{height: 80, width: 80, borderRadius: 40}}
                />
                <View>
                    <Text> Amir Mohazzab </Text>
                    <Text> Oct 10, 2023</Text>
                </View>
            </View>
            <View style={{}}>
                <Image 
                    resizeMode='cover'
                    source={images[imageSource]}
                    style={{height: 200, width: 0.98*screenWidth}}
                />
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <View style={{flexDirection: "row", alignItems: "center", flex: 3}}>
                    <Button 
                        buttonStyle={{backgroundColor:  'transparent'}}
                        icon={{name: 'heart', type: 'feather', size: 25, color: 'black'}}
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
            <View style={{marginLeft: -295}}>
                <Text> {`${likes} Likes`} </Text>
            </View>
            <View style={{paddingHorizontal: 15}}>
                <Text style={{textAlign: 'justify'}}>
                    <Text style={{fontWeight: "bold"}}> Amir </Text> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus eu orci sit amet ullamcorper. Nulla at dignissim sem, eu ullamcorper tellus. Vestibulum vel lobortis lorem, quis congue dolor. Aliquam aliquam turpis nec lectus imperdiet pharetra. Aliquam felis tortor, convallis vestibulum ligula nec, pellentesque porttitor enim. Morbi vitae justo in mi pretium aliquet. Aliquam erat volutpat.
                </Text>
            </View>
            <View style={{width: "100%", backgroundColor: "grey", height: 1, marginTop: 20}} />
        </View>
       
     );
}
 
export default InstagramCard;