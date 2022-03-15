import NavTop from 'src/components/navTop';
import PageWrapper from 'src/components/pageWrapper'
import TextApp from 'src/components/textApp';
import {View } from 'react-native'

import styles from './styles';
import {RootStackScreenProps, RegisterStackParamList} from 'src/components/types'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginInput from 'src/components/loginInput';
import Select from 'src/components/loginInput/select';
import LoginButton from 'src/components/loginButton';
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
      <View style={styles.main} >
        <TextApp style={styles.title} >Vamos a verificar tu telefono</TextApp>
        <TextApp style={styles.textP} >Lorem ipsum dolor sit amet, consectetu radipis cinelit. Vestibulum.</TextApp>
        <Select style={{marginBottom:16}} placeholder="Selecciona tu país" />
        <LoginInput placeholder='Numero de telefono' />
        <LoginButton leftIcon={require('assets/icons/smartphone.png')} title='VERIFICAR MI TELEFONO' onPress={() => console.log("press")} />
      </View>
    </PageWrapper>
  );
}