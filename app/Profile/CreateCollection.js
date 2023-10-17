import React from 'react'
import { View, Text } from 'react-native'
import {Header} from 'react-native-elements'
import { Input} from '@rneui/themed';
import {AntDesign} from '@expo/vector-icons'
import {Dimensions} from 'react-native';


const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const CreateCollections = ({navigation}) => {
    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Header
                leftComponent={ <AntDesign name="close" size={30} color="black" onPress={() => navigation.goBack()}/> }
                centerComponent={{ text: 'Create Collection', style: { color: '#000', fontSize: 20, fontWeight: "bold"} }}
                rightComponent={ { text: 'Next', style: { color: 'blue', fontSize: 20, fontWeight: "bold"} } }
                containerStyle={{
                    backgroundColor: 'white',
                    justifyContent: 'space-around',
                }}
            />
            <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center", }}>
                <View style={{padding: 10, alignItems: 'flex-start', width: screenWidth, padding: 20}}>
                    <Text style={{fontSize: 18}}> NAME </Text>
                    <View style={{width: "100%", backgroundColor: "grey", height: 1, marginTop: 10}} />
                </View>
                <View style={{width: screenWidth, padding: 10}}>
                    <Input
                        label='Collection Name'
                        isFocused='true'
                        inputContainerStyle={{borderBottomWidth: 1, borderBottomColor: 'black'}}
                    />
                </View>
            </View>
        </View>
     );
}
 
export default CreateCollections;