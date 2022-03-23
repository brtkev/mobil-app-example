import NavTop from 'src/components/navTop';
import PageWrapper from 'src/components/pageWrapper'
import TextApp from 'src/components/textApp';
import {View, TouchableOpacity, StyleSheet } from 'react-native'
import { useForm } from 'react-hook-form';
import {RegisterStackScreenProps} from 'src/components/types'
import registerStyles from '../styles';
// import styles from './styles';
import LoginInput from 'src/components/loginInput';
import Select from 'src/components/loginInput/select';
import LoginButton from 'src/components/loginButton';
import colors from 'src/styles/colors';
import { useContext } from 'react';
import RegisterContext from '../context';
type phoneInput = {
  phone: string;
}

const styles = StyleSheet.create({
  main:{
    display:"flex", justifyContent: "space-between", padding: 16, flex:1, paddingBottom: 24
  },
  title:{
    fontSize: 24, marginBottom: 8, letterSpacing: 0.18, lineHeight: 24, paddingTop: 15,
  },
  p: {
    fontSize: 16, lineHeight: 25, letterSpacing: 0.5, marginBottom: 32, color: colors.textSecondary
  },
  smP: {
    fontSize: 12, lineHeight: 16, letterSpacing: 0.4
  }
})

export default function PhoneVerify(props : RegisterStackScreenProps<"Phone">){
  const {updateData} = useContext(RegisterContext) || {};

  const {  register ,watch, setValue, handleSubmit } = useForm<phoneInput>();
  const watcher = watch("phone");
  function submitHandler(data : phoneInput){
    if(props.route.params){
      const phoneNumber = `+${props.route.params?.initialNumber}${data.phone}`;
      //send this to provider to send a message to the number if its valid
      //send menssage to this number
      updateData && updateData({
        phone: phoneNumber,
        country: props.route.params.country
      })
      props.navigation.push("VerifyCode")
    }
  }

  return(
    <PageWrapper>
      <NavTop onPress={() => props.navigation.goBack()} />
      <View style={styles.main}  >
        <View >
          <TextApp style={styles.title} >Vamos a verificar tu telefono</TextApp>
          <TextApp style={styles.p} >Lorem ipsum dolor sit amet, consectetu radipis cinelit. Vestibulum.</TextApp>
          <Select  selected={props.route.params !== undefined} onPress={() => props.navigation.push("CountrySelect")} 
            style={{marginBottom: 24}} rightIcon={props.route.params?.rightIcon}
           placeholder={ props.route.params?.placeholder || "Selecciona tu país"} />
          <LoginInput onChangeText={v => setValue("phone", v)}
           keyboardType='decimal-pad' textContentType='telephoneNumber' 
           placeholder='Numero de telefono' {...register("phone")} />
        </View>

        <View >
          <LoginButton style={{marginBottom: 16}} disabled={!watcher} theme='signin' 
          leftIcon={require('assets/icons/smartphone.png')} title='VERIFICAR MI TELEFONO'
           onPress={handleSubmit(submitHandler)} />
          <TextApp style={styles.smP} >Al pulsar “Verificar mi Teléfono” Certifiqué que tengo 18 años o más y estoy de acuerdo con el </TextApp>
          <TouchableOpacity  onPress={() => console.log("to policy")} >
            <TextApp style={[styles.smP, {color:colors.secondary[200]}]} >
              acuerdo de usuario <TextApp style={[styles.smP, {color: colors.textSecondary}]} >
                y la</TextApp> política de privacidad.
            </TextApp>
          </TouchableOpacity>
        </View>
      </View></PageWrapper>
  );
}
