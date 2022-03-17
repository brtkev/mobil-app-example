import NavTop from 'src/components/navTop';
import PageWrapper from 'src/components/pageWrapper'
import TextApp from 'src/components/textApp';
import {View, TouchableOpacity } from 'react-native'
import { useForm } from 'react-hook-form';
import {RegisterStackScreenProps} from 'src/components/types'
import styles from '../styles';
import LoginInput from 'src/components/loginInput';
import Select from 'src/components/loginInput/select';
import LoginButton from 'src/components/loginButton';
import colors from 'src/styles/colors';

type phoneInput = {
  phone: string;
}

export default function PhoneVerify(props : RegisterStackScreenProps<"Phone">){
  const {  register ,watch, setValue, handleSubmit } = useForm<phoneInput>();
  const watcher = watch("phone");
  function submitHandler(data : phoneInput){
    data.phone = `+${props.route.params?.initialNumber}${data.phone}`;
    //send this to provider to send a message to the number if its valid
    console.log(data)
  }

  return(
    <PageWrapper>
      <NavTop onPress={() => props.navigation.goBack()} />
      <View style={styles.main}  >
        <View >
          <TextApp style={styles.title} >Vamos a verificar tu telefono</TextApp>
          <TextApp style={styles.textP} >Lorem ipsum dolor sit amet, consectetu radipis cinelit. Vestibulum.</TextApp>
          <Select  selected={props.route.params !== undefined} onPress={() => props.navigation.push("CountrySelect")} 
            style={{marginBottom:16}} rightIcon={props.route.params?.rightIcon}
           placeholder={ props.route.params?.placeholder || "Selecciona tu país"} />
          <LoginInput onChangeText={v => setValue("phone", v)}
           keyboardType='decimal-pad' textContentType='telephoneNumber' 
           placeholder='Numero de telefono' {...register("phone")} />
        </View>

        <View >
          <LoginButton style={{marginBottom: 16}} disabled={!watcher} theme='signin' 
          leftIcon={require('assets/icons/smartphone.png')} title='VERIFICAR MI TELEFONO'
           onPress={handleSubmit(submitHandler)} />
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
