import {RootStackScreenProps, RegisterStackParamList} from 'src/components/types'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountrySelect from './screens/countrySelect';
import PhoneVerify from './screens/phoneVerify';
import VerifyCode from './screens/verifyCode';
import UserInformation from './screens/userInformation';
import UserPassword from './screens/userPassword';
import UserSecurityQuestions from './screens/UserSecurityQuestions';
const Stack = createNativeStackNavigator<RegisterStackParamList>()

export default function Register(props : RootStackScreenProps<"Register">){
  return(
    <Stack.Navigator initialRouteName='userSecurityQuestions' screenOptions={{headerShown: false}} >
      <Stack.Screen name="Phone" component={PhoneVerify}  />
      <Stack.Screen name="CountrySelect" component={CountrySelect}  />
      <Stack.Screen name="VerifyCode" component={VerifyCode}  /> 
      <Stack.Screen name="UserInfo" component={UserInformation} />
      <Stack.Screen name="UserPassword" component={UserPassword} />
      <Stack.Screen name="userSecurityQuestions" component={UserSecurityQuestions} />
    </Stack.Navigator>
  );
}
