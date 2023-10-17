import React, {useState} from 'react'
import { View, Text, Switch } from 'react-native';
import {Header} from 'react-native-elements'
import {FontAwesome, Entypo} from '@expo/vector-icons'
import { Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');


const Setting = ({navigation}) => {

    const [switchValue, setSwitchValue] = useState();

    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Header
                leftComponent={ <FontAwesome name="long-arrow-left" size={30} color="black" onPress={() => navigation.goBack()}/> }
                centerComponent={{ text: 'Settung', style: { color: '#000', fontSize: 20, fontWeight: "bold"} }}
                containerStyle={{
                    backgroundColor: 'white',
                    justifyContent: 'space-around',
                }}
            />
            <View style={{flex: 1, justifyContent: "flex-start", alignItems: "flex-start", width: screenWidth}}>
                <Text style={{fontSize: 20, fontWeight: "bold", marginLeft: 10}}> Invite Friends </Text>
                <View style={{flexDirection: "row", alignItems: 'center', marginLeft: 30, paddingVertical: 20}}>
                    <Entypo name="facebook" size={30} color="dodgerblue" />
                    <Text style={{fontSize: 18, marginLeft: 30, color: "grey"}}> Invite Facebook Friends </Text>
                </View>
                <View style={{flexDirection: "row", alignItems: 'center', marginLeft: 10, paddingVertical: 20}}>
                    <Text style={{fontSize: 18, marginLeft: 15, color: "grey"}}> Invite Friends </Text>
                </View>
                <Text style={{fontSize: 20, fontWeight: "bold", marginLeft: 10}}> Follow People </Text>
                <View style={{flexDirection: "row", alignItems: 'center', marginLeft: 30, paddingVertical: 20}}>
                    <Entypo name="facebook" size={30} color="dodgerblue" />
                    <Text style={{fontSize: 18, marginLeft: 30, color: "grey"}}> Facebook Friends </Text>
                </View>
                <View style={{flexDirection: "row", alignItems: 'center', marginLeft: 35, paddingVertical: 20}}>
                    <FontAwesome name="user" size={30} color="dodgerblue" />
                    <Text style={{fontSize: 18, marginLeft: 35, color: "grey"}}> Contacts </Text>
                </View>

                <View style={{backgroundColor: "#ccc", height: 1, width: "100%", marginTop: 5}}/> 

                <Text style={{fontSize: 20, fontWeight: "bold", marginLeft: 10}}> Account </Text>
                <View style={{flexDirection: "row", alignItems: 'center', marginLeft: 10, paddingVertical: 20}}>
                    <Text style={{fontSize: 18, marginLeft: 20, color: "grey"}}> Password </Text>
                </View>
                <View style={{flexDirection: "row", alignItems: 'center', marginLeft: 10, paddingVertical: 20}}>
                    <Text style={{fontSize: 18, marginLeft: 20, color: "grey"}}> Saved </Text>
                </View>
                <View style={{flexDirection: "row", alignItems: 'center', marginLeft: 10, paddingVertical: 20}}>
                    <Text style={{fontSize: 18, marginLeft: 20, color: "grey"}}> Payments </Text>
                </View>
                <View style={{flexDirection: "row", alignItems: 'center', marginLeft: 10, paddingVertical: 20, justifyContent: "space-between", width: "90%"}}>
                    <Text style={{fontSize: 18, marginLeft: 20, color: "grey"}}> Private Account </Text>
                    <Switch
                        value={switchValue}
                        onValueChange={() => setSwitchValue(!switchValue)}
                        onTintColor="blue" thumTintColor="white"
                    />
                </View>
            </View>
        </View>
     );
}
 
export default Setting;