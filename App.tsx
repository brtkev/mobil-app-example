import React, { createContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppContext from 'src/appContext';

import { RootStackParamList } from './src/components/types';
import { useFonts } from 'expo-font';

import Home from 'src/pages/home'
import Welcome from 'src/pages/welcome'
const Stack = createNativeStackNavigator<RootStackParamList>();


function App() {
  const [loaded ]= useFonts({
    "Poppins-Regular" : require('assets/fonts/Poppins-Regular.ttf')
  })
  
  return(
    <AppContext.Provider value={{poppinsLoaded: loaded}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;

