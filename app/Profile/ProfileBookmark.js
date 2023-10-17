import React, {useState} from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { Layout, Tab, TabView, Text} from '@ui-kitten/components';
import {Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';


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
const ProfileBookmark = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigation = useNavigation();

  return (
    <TabView
      selectedIndex={selectedIndex}
      onSelect={(selectedIndex) => setSelectedIndex(selectedIndex)}
      tabBarStyle={{height: 50, }}
      indicatorStyle={{backgroundColor: 'black' }}          
    >
      <Tab 
        title='All' 
        style={{ color: selectedIndex === 0 ? "red" : "green" }}
        active={selectedIndex === 0}
        onSelect={() => setSelectedIndex(0)}
      >
        <Layout style={styles.tabContainer}>
          <ScrollView>
              <View style={{width:'100%',height:40,justifyContent:'center',alignItems:'center'}}>
                  <Text note>only you can see what you saved</Text>
              </View>
              <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                {renderSectionOne()}
              </View>
            </ScrollView>
        </Layout>
      </Tab>
      <Tab 
        title='Collections' 
        style={{ color: selectedIndex === 1 ? "red" : "green" }}
        active={selectedIndex === 1}
        onSelect={() => setSelectedIndex(1)}
      >
        <Layout style={styles.tabContainer}>
        <View style={{justifyContent:'center',alignItems:'center', paddingTop: 50}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={{width:100,height:100,borderColor:'#000',borderWidth:1,borderRadius:60,justifyContent:'center',alignItems:'center'}}>
              <Ionicons name="ios-bookmark-outline" size={48} color="black" />
            </View>
          </View>
          <Text style={{fontSize:18,fontWeight:'bold',color:'#000',marginTop:10}}>Save Collection</Text>
          <Text>Collection group things yo save together.tap+</Text>
          <Text>to start your first collection</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CreateCollection')}>
            <Text style={{color:'blue',marginTop:10}}> Create Collection </Text>
          </TouchableOpacity>
          </View>
        </Layout>
      </Tab>
    </TabView>
  );
};


export default ProfileBookmark;

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    
  },
});