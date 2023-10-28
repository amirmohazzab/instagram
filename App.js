import React from 'react'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './app/RootNavigator';

const App = () => {
  return ( 
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApplicationProvider>
    
   );
}
 
export default App;