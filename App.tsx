import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Auth from './src/components/auth';

import Home from 'src/pages/home';
import Login from 'src/pages/login';
import Register from 'src/pages/register';

import { RootStackParamList } from './src/components/types';
const Stack = createNativeStackNavigator<RootStackParamList>();


function App() {
  // return (
  //   <NavigationContainer >
  //     <Stack.Navigator>
  //       <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
  //       <Stack.Screen name="Login" component={Login} />
  //       {/* <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} /> */}
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
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
