import React from 'react'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './app/MainScreen';

const App = () => {
  return ( 
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    </ApplicationProvider>
    
   );
}
 
export default App;