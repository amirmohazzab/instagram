import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './app/components/MainScreen';

const App = () => {
  return ( 
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
   );
}
 
export default App;