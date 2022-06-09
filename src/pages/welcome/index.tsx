import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeComponent from 'src/pages/welcome/welcome';
import Login from 'src/pages/welcome/login';
import Register from 'src/pages/welcome/register';
import RecoverPassword from 'src/pages/welcome/recoverPassword';

import { WelcomeStackParamList } from 'src/components/types';
const Stack = createNativeStackNavigator<WelcomeStackParamList>();


function Welcome() {
  
  return(
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}} >
      <Stack.Screen name="Welcome" component={WelcomeComponent} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
    </Stack.Navigator>
  );
}export default Welcome;