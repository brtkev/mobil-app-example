import React, { createContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextStyle } from 'react-native';
import Home from 'src/pages/home';
import Login from 'src/pages/login';
import Register from 'src/pages/register';
import AppContext from 'src/appContext';

import { RootStackParamList } from './src/components/types';
import { useFonts } from 'expo-font';
const Stack = createNativeStackNavigator<RootStackParamList>();


function App() {
  const [loaded ]= useFonts({
    "Poppins-Regular" : require('assets/fonts/Poppins-Regular.ttf')
  })
  
  return(
    <AppContext.Provider value={{poppinsLoaded: loaded}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// // import Home from './components/home';
// import Auth from './components/auth'



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>whitepay!</Text>
//       <Auth></Auth>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
