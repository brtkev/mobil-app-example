import NavTop from 'src/components/navTop';
import PageWrapper from 'src/components/pageWrapper'
import TextApp from 'src/components/textApp';
import {View } from 'react-native'

import {RootStackScreenProps, RegisterStackParamList} from 'src/components/types'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator<RegisterStackParamList>()

export default function Register(props : RootStackScreenProps<"Register">){

  return(
    <Stack.Navigator initialRouteName='Phone' >
      <Stack.Screen name="Phone" component={PhoneVerify} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

function PhoneVerify(props : any){

  return(
    <PageWrapper>
      <NavTop {...props} />
      <TextApp>register page</TextApp>
    </PageWrapper>
  );
}