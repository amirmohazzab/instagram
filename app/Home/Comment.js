import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Image} from 'react-native'
import {Header, Icon} from 'react-native-elements'
import {FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';


const Comment = ({navigation, route}) => {

    const {username, caption, Thumbnail} = route.params;

    const [comment, setComment] = useState();
    const [commentArray, setCommentArray] = useState([]);

    const addComment = () => {
        if(comment) {
            setCommentArray((prev) => [
                ...prev, 
              {
                name: "ah.mohazzab.com",
                key: Math.floor(Math.random()*1000).toString(),
                comment: comment
              }
              ]);

          setComment();
        }
    }


    const deleteComment = (key) => {
        setCommentArray((prev) => prev.filter((p) => p.key != key));

        setComment();
    }

    let comments = commentArray.map((val, key) => (
        <View key={val.key} style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: "95%", paddingVertical: 5}}>
                    <Image
                        style={{
                            marginHorizontal: 5,
                            borderColor: 'pink',
                            borderWidth: 2,
                            width: 60,
                            height: 60,
                            borderRadius: 30
                        }}
                        source={require('../../assets/posts/Thumbnail-3.jpg')}
                    />
                    <View style={{justifyContent: "center", alignItems: "flex-start", width: "75%", paddingLeft: 5}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#000'}}> {val.name} </Text>
                            <Text note style={{color: "grey"}}> {val.comment} </Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center', paddingLeft: 5}}>
                            <Text note style={{color: "grey"}}>32 m</Text>
                            <Ionicons name="ios-trash" size={20} color="grey" style={{paddingLeft: 15}} onPress={() => deleteComment(val.key)} />
                        </View>
                    </View>
                    <AntDesign name="hearto" size={24} color="black" style={{paddingRight: 10}}/>
                </View>
    ));


    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Header
                leftComponent={ <FontAwesome name="long-arrow-left" size={30} color="black" onPress={() => navigation.goBack()}/> }
                centerComponent={{ text: 'Comments', style: { color: '#000', fontSize: 20, fontWeight: "bold"} }}
                rightComponent={ <FontAwesome name="send" size={24} color="black" onPress={() => navigation.navigate('Direct')} /> }
                containerStyle={{
                    backgroundColor: 'white',
                    justifyContent: 'space-around',
                }}
            />
            <View style={{width: "100%", flexDirection: "row", alignItems: "center", padding: 10}}>
                <Image
                    style={{
                        marginHorizontal: 5,
                        borderColor: 'pink',
                        borderWidth: 2,
                        width: 80,
                        height: 80,
                        borderRadius: 40
                    }}
                    source={Thumbnail}
                />
                <Text> {caption} </Text>
            </View>
            <View style={{width: "100%", backgroundColor: "grey", height: 1, marginVertical: 10}} />

            <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center"}}>
                    {comments}
            </View>
            <View style={styles.footer}> 
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image
                        style={{
                            marginHorizontal: 5,
                            borderColor: 'pink',
                            borderWidth: 2,
                            width: 60,
                            height: 60,
                            borderRadius: 30
                        }}
                        source={Thumbnail}
                    />
                    <TextInput
                        placeholder="Add a comment ..."
                        placeholderTextColor="#ccc"
                        style={{fontSize:18, marginLeft: 10}}
                        value={comment}
                        onChangeText={ value => setComment(value)}
                    />
                </View>
                <View>
                    <Text style={{color:'blue',fontSize:16}} onPress={addComment}>Post</Text>
                </View>   
            </View>
        </View>
     );
}
 
export default Comment;


const styles = StyleSheet.create({
    footer:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        zIndex:10,
        height: 75,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        borderTopWidth:0.5,
        borderTopColor:'#ccc',
        backgroundColor:'#FFF'
    }
  })