import { useForm } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import LoginButton from 'src/components/loginButton'
import LoginInput from 'src/components/loginInput'
import PageWrapper from 'src/components/pageWrapper'
import TextApp from 'src/components/textApp'
import {RegisterStackScreenProps} from 'src/components/types'
import RegisterScreenWrapper from '../screenWrapper'
import registerStyles from '../styles';
import {userPasswordSchema} from 'src/components/formSchemas'
import { yupResolver } from '@hookform/resolvers/yup'
import Form from 'src/components/form'
import RegisterContext from '../context'
import { useContext } from 'react'
import colors from 'src/styles/colors'

const styles = StyleSheet.create({
  contextBox: {
    flex: 1, justifyContent: "space-between", paddingBottom: 32
  },
  inputStyle: {
    fontSize : registerStyles.textP.fontSize
  },
  main:{
    display:"flex", justifyContent: "space-between", padding: 16, flex:1, paddingBottom: 24
  },
  title:{
    fontSize: 24, marginBottom: 16, letterSpacing: 0.18, lineHeight: 24, paddingTop: 15,
  },
  p: {
    fontSize: 16, lineHeight: 25, letterSpacing: 0.5, marginBottom: 32, color: colors.textSecondary
  },
  smP: {
    fontSize: 12, lineHeight: 16, letterSpacing: 0.4
  }
})

type formProps = {
  password : string, passwordConfirm : string
}

export default function UserPassword(props : RegisterStackScreenProps<"UserPassword">){
  const {formState: {errors}, setValue, register, handleSubmit, watch} = useForm<formProps>({resolver: yupResolver(userPasswordSchema)});
  const watchers = watch(["password", "passwordConfirm"]);
  
  const {updateData} = useContext(RegisterContext);
  const submitHandler = (data : formProps) =>{
    updateData({ password : data.password});
    props.navigation.push("userSecurityQuestions")
  }
  return(
    <RegisterScreenWrapper backHandler={() => props.navigation.goBack()} backIcon="exit"
    style={[registerStyles.main, styles.contextBox]} >
      <View>
        <TextApp style={styles.title} >Configura una contraseña segura</TextApp>
        <TextApp style={styles.p} >Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</TextApp>
        <Form {...{register, setValue, errors}}>
          <LoginInput name="password" placeholder='Contraseña' inputStyles={styles.inputStyle} password 
          style={{marginBottom: 24}} />
          <LoginInput name="passwordConfirm" placeholder='Repite la contraseña' inputStyles={styles.inputStyle} password />
        </Form>
      </View>
      <LoginButton disabled={!(watchers.every((v) => v)) /* false if all the inputs have vals*/}
       theme='signin' title='CONTINUAR' onPress={handleSubmit(submitHandler)} />
    </RegisterScreenWrapper>
  )
}