import {RootStackScreenProps, RegisterStackParamList, RegisterStackScreenProps} from 'src/components/types'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountrySelect from './screens/countrySelect';
import PhoneVerify from './screens/phoneVerify';
const Stack = createNativeStackNavigator<RegisterStackParamList>()

export default function Register(props : RootStackScreenProps<"Register">){

  return(
    <Stack.Navigator initialRouteName='Phone' >
      <Stack.Screen name="Phone" component={PhoneVerify} options={{headerShown: false}} />
      <Stack.Screen name="CountrySelect" component={CountrySelect} options={{headerShown: false}} /> 
    </Stack.Navigator>
  );
}
