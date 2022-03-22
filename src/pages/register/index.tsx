import {RootStackScreenProps, RegisterStackParamList} from 'src/components/types'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountrySelect from './screens/countrySelect';
import PhoneVerify from './screens/phoneVerify';
import VerifyCode from './screens/verifyCode';
import UserInformation from './screens/userInformation';
import UserPassword from './screens/userPassword';
import UserSecurityQuestions from './screens/userSecurityQuestions';
import React, {  useState } from 'react';
import RegisterContext, {userProps} from './context';
import Pin from './screens/pin';
const Stack = createNativeStackNavigator<RegisterStackParamList>()



export default function Register(props : RootStackScreenProps<"Register">){
  const [userData, setUserData] = useState<userProps>({})
  const updateData = (data : userProps) => setUserData(prev => Object.assign({}, prev, data));

  return(
    <RegisterContext.Provider value={{
      userData,
      updateData
    }} >
      <Stack.Navigator initialRouteName='pin' screenOptions={{headerShown: false}} >
        <Stack.Screen name="Phone" component={PhoneVerify}  />
        <Stack.Screen name="CountrySelect" component={CountrySelect}  />
        <Stack.Screen name="VerifyCode" component={VerifyCode}  /> 
        <Stack.Screen name="UserInfo" component={UserInformation} />
        <Stack.Screen name="UserPassword" component={UserPassword} />
        <Stack.Screen name="userSecurityQuestions" component={UserSecurityQuestions} />
        <Stack.Screen name="pin" component={Pin} />
      </Stack.Navigator>
    </RegisterContext.Provider>
  );
}
