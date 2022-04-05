import {createContext, useState} from 'react';
import {RootStackScreenProps, RegisterStackParamList} from 'src/components/types'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterContext, {userProps} from './register/context';

import PhoneVerify from './register/screens/phoneVerify';
import CountrySelect from './register/screens/countrySelect';
import VerifyCode from './register/screens/verifyCode';
import UserSecurityQuestions from './register/screens/userSecurityQuestions';
import UserPassword from './register/screens/userPassword';
import Success from './register/screens/success';


const Stack = createNativeStackNavigator<RegisterStackParamList>()

export default function RecoverPassword(props : RootStackScreenProps<"RecoverPassword">){
  const [userData, setUserData] = useState<userProps>({})
  const updateData = (data : userProps) => setUserData(prev => Object.assign({}, prev, data));

  return(
    <RegisterContext.Provider value={{
      userData,
      updateData
    }} >
      <Stack.Navigator initialRouteName='Phone' screenOptions={{headerShown: false}} >
        <Stack.Screen name="Phone" component={PhoneVerify} />
        <Stack.Screen name="CountrySelect" component={CountrySelect}  />
        <Stack.Screen name="VerifyCode" component={VerifyCode}
          initialParams={{nextScreen:"userSecurityQuestions"}}  /> 
        <Stack.Screen name="userSecurityQuestions" component={UserSecurityQuestions} 
          initialParams={{nextScreen: "UserPassword"}} />
        <Stack.Screen name="UserPassword" component={UserPassword}
          initialParams={{nextScreen:"success"}}  /> 
        <Stack.Screen name="success" component={Success} />
      </Stack.Navigator>
    </RegisterContext.Provider>
  );
}