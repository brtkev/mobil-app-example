import {RootStackScreenProps, RegisterStackParamList, RegisterStackScreenProps} from 'src/components/types'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountrySelect from './screens/countrySelect';
import PhoneVerify from './screens/phoneVerify';
import VerifyCode from './screens/verifyCode';
const Stack = createNativeStackNavigator<RegisterStackParamList>()

export default function Register(props : RootStackScreenProps<"Register">){

  return(
    <Stack.Navigator initialRouteName='Phone' screenOptions={{headerShown: false}} >
      <Stack.Screen name="Phone" component={PhoneVerify}  />
      <Stack.Screen name="CountrySelect" component={CountrySelect}  />
      <Stack.Screen name="VerifyCode" component={VerifyCode}  /> 
    </Stack.Navigator>
  );
}
