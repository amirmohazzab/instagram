import React, {useState} from 'react'
import {View, Text, Image, ScrollView} from 'react-native'
import {Header} from 'react-native-elements'
import { Input} from '@rneui/themed';
import {FontAwesome, Entypo} from '@expo/vector-icons'
import {Picker} from '@react-native-picker/picker';
import { Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');



const Edit = ({navigation}) => {

    const [selected, setSelected] = useState();

    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Header
                leftComponent={ <FontAwesome name="long-arrow-left" size={30} color="black" onPress={() => navigation.goBack()}/> }
                centerComponent={{ text: 'Edit Profile', style: { color: 'grey', fontSize: 20, fontWeight: "bold"} }}
                rightComponent={ <Entypo name="check" size={30} color="dodgerblue" /> }
                containerStyle={{
                    backgroundColor: 'white',
                    justifyContent: 'space-around',
                }}
            />
            <ScrollView> 
            <View style={{flex: 1, justifyContent: "flex-start", alignItems: "flex-start", width: screenWidth}}>
                <View style={{justifyContent:'center',alignItems:'center', width: "100%", marginTop: 20}}>
                    <Image source={require('../../assets/posts/Thumbnail-2.jpg')} style={{width:80,height:80,borderRadius:40, marginBottom: 10}} />
                    <Text style={{color:'blue',padding:10}}>Change Photo</Text>
                </View>

                <View style={{width: screenWidth, padding: 10}}>
                    <Input
                        label='Name'
                        isFocused='true'
                        inputContainerStyle={{borderBottomWidth: 1, borderBottomColor: 'black'}}
                    />
                </View>

                <View style={{width: screenWidth, padding: 10}}>
                    <Input
                        label='UserName'
                        isFocused='true'
                        inputContainerStyle={{borderBottomWidth: 1, borderBottomColor: 'black'}}
                    />
                </View>

                <View style={{width: screenWidth, padding: 10}}>
                    <Input
                        label='WebSite'
                        value='ahmohazzab.com'
                        isFocused='true'
                        inputContainerStyle={{borderBottomWidth: 1, borderBottomColor: 'black'}}
                    />
                </View>

                <View style={{width: screenWidth, padding: 10}}>
                    <Input
                        label='Bio'
                        value='React Developer'
                        isFocused='true'
                        inputContainerStyle={{borderBottomWidth: 1, borderBottomColor: 'black'}}
                    />
                </View>

                <View>
                    <Text style={{fontSize: 20, fontWeight: "bold", marginLeft: 10}}> Private Information </Text>
                </View>


                <View style={{width: screenWidth, padding: 10}}>
                    <Input
                        label='Email Address'
                        isFocused='true'
                        inputContainerStyle={{borderBottomWidth: 1, borderBottomColor: 'black'}}
                    />
                </View>

                <View style={{width: screenWidth, padding: 10}}>
                    <Input
                        label='Phone Number'
                        isFocused='true'
                        inputContainerStyle={{borderBottomWidth: 1, borderBottomColor: 'black'}}
                    />
                </View>

                <View style={{width: screenWidth, padding: 10}}>
                    <Text style={{margin:10}}>Gender</Text>
                    <Picker
                        mode="dropup"
                        selectedValue={selected}
                        onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
                    >
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Famle" value="Female" />
                    </Picker>
                </View>

                

            </View>
            </ScrollView>
            
        </View>
     );
}
 
export default Edit;