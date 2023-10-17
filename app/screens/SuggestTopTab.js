import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {View} from 'react-native'
import {Header} from 'react-native-elements'
import Constans from 'expo-constants'
import {FontAwesome } from '@expo/vector-icons';
import Suggest from './../Profile/Suggest';
import Facebook from './../Profile/Facebook';
import Contact from './../Profile/Contact';

const TopTab = createMaterialTopTabNavigator();

const SuggestTopTab = ({navigation}) => {
    
    return ( 
        <View style={{flex: 1}}> 
            <Header
                leftComponent={ <FontAwesome name="long-arrow-left" size={30} color="black" onPress={() => navigation.goBack()}/> }
                centerComponent={{ text: 'Discover people', style: { color: '#000', fontSize: 20, fontWeight: "bold"} }}
                containerStyle={{
                    backgroundColor: 'white',
                    justifyContent: 'space-around',
                }}
            />
            
            <TopTab.Navigator 
                initialRouteName="Suggest"
                backBehavior="none"
                screenOptions={{
                    activeTintColor: "black",
                    inactiveTintColor: "gray",
                    labelStyle: {
                        fontSize: 20,
                    },
                    indicatorStyle: {
                        backgroundColor: 'black',
                        

                    },
                    style: {
                        backgroundColor: "#f8f4f4",
                        
                    }
                }}
            >
                <TopTab.Screen name="Suggest" component={Suggest} options={{tabBarLabel: "Suggest"}} />
                <TopTab.Screen name="Facebook" component={Facebook} options={{tabBarLabel: "Facebook"}} />
                <TopTab.Screen name="Contact" component={Contact} options={{tabBarLabel: "Contact"}} />
            </TopTab.Navigator>
        </View>
 );
}

 
export default SuggestTopTab;