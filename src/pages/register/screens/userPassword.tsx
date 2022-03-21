import { useForm } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import LoginButton from 'src/components/loginButton'
import LoginInput from 'src/components/loginInput'
import PageWrapper from 'src/components/pageWrapper'
import TextApp from 'src/components/textApp'
import {RegisterStackScreenProps} from 'src/components/types'
import RegisterScreenWrapper from '../screenWrapper'
import registerStyles from '../styles';

const styles = StyleSheet.create({
  contextBox: {
    flex: 1, justifyContent: "space-between", paddingBottom: 32
  },
  inputStyle: {
    fontSize : registerStyles.textP.fontSize
  }
})


export default function UserPassword(props : RegisterStackScreenProps<"UserPassword">){
  useForm();
  return(
    <RegisterScreenWrapper backHandler={() => props.navigation.goBack()}
    style={[registerStyles.main, styles.contextBox]} >
      <View>
        <TextApp style={registerStyles.title} >Configura una contraseña segura</TextApp>
        <TextApp style={[registerStyles.textP, {marginBottom: 32}]} >Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</TextApp>
        <LoginInput placeholder='Contraseña' inputStyles={styles.inputStyle} password />
        <LoginInput placeholder='Repite la contraseña' inputStyles={styles.inputStyle} password />
      </View>
      <LoginButton theme='signin' title='CONTINUAR' onPress={() => console.log("working")} />
    </RegisterScreenWrapper>
  )
}