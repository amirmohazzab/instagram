import React from 'react'
import {View, Image } from 'react-native'
import {Button} from 'react-native-elements';



const ImageElement = ({ImageSource}) => {
    return ( 
        <View style={{flex:1}}>
            <Image 
                source={ImageSource}
                style={{width: "100%", height:160, flex:1}} 
            />
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#ccc"}}>
                <View style={{flexDirection: "row", alignItems: "center", flex: 3}}>
                    <Button 
                        buttonStyle={{backgroundColor:  'transparent'}}
                        icon={{name: 'hearto', type: 'antdesign', size: 25, color: "black"}}
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
        </View>
     );
}
 
export default ImageElement;