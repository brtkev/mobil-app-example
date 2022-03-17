import NavTop from 'src/components/navTop';
import PageWrapper from 'src/components/pageWrapper'
import TextApp from 'src/components/textApp';
import {View, TouchableOpacity } from 'react-native'

import styles from './styles';
import {RootStackScreenProps, RegisterStackParamList, RegisterStackScreenProps} from 'src/components/types'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginInput from 'src/components/loginInput';
import Select from 'src/components/loginInput/select';
import LoginButton from 'src/components/loginButton';
import colors from 'src/styles/colors';
import CountrySelect from './screens/countrySelect';
const Stack = createNativeStackNavigator<RegisterStackParamList>()

export default function Register(props : RootStackScreenProps<"Register">){

  return(
    <Stack.Navigator initialRouteName='Phone' >
      <Stack.Screen name="Phone" component={PhoneVerify} options={{headerShown: false}} />
      <Stack.Screen name="CountrySelect" component={CountrySelect} options={{headerShown: false}} /> 
    </Stack.Navigator>
  );
}

function PhoneVerify(props : RegisterStackScreenProps<"Phone">){
  console.log(props.route.params)
  return(
    <PageWrapper>
      <NavTop onPress={() => props.navigation.goBack()} />
      <View style={styles.main}  >
        <View >
          <TextApp style={styles.title} >Vamos a verificar tu telefono</TextApp>
          <TextApp style={styles.textP} >Lorem ipsum dolor sit amet, consectetu radipis cinelit. Vestibulum.</TextApp>
          {props.route.params ? 
          <Select option rightIcon={props.route.params?.rightIcon} onPress={() => props.navigation.push("CountrySelect")} style={{marginBottom:16}}
          placeholder={props.route.params?.placeholder} />
          :
          <Select onPress={() => props.navigation.push("CountrySelect")} style={{marginBottom:16}}
           placeholder="Selecciona tu país" />
          }
          <LoginInput placeholder='Numero de telefono' />
        </View>
        <View >
          <LoginButton style={{marginBottom: 16}} disabled theme='signin' leftIcon={require('assets/icons/smartphone.png')} title='VERIFICAR MI TELEFONO' onPress={() => console.log("press")} />
          <TextApp style={styles.smText} >Al pulsar “Verificar mi Teléfono” Certifiqué que tengo 18 años o más y estoy de acuerdo con el </TextApp>
          <TouchableOpacity  onPress={() => console.log("to policy")} >
            <TextApp style={styles.linkText} >
              acuerdo de usuario <TextApp style={[styles.smText, {color: colors.textSecondary}]} >
                y la</TextApp> política de privacidad.
            </TextApp>
          </TouchableOpacity>
        </View>
      </View></PageWrapper>
  );
}
