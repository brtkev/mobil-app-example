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

const styles = StyleSheet.create({
  contextBox: {
    flex: 1, justifyContent: "space-between", paddingBottom: 32
  },
  inputStyle: {
    fontSize : registerStyles.textP.fontSize
  }
})

type formProps = {
  password : string, passwordConfirm : string
}

export default function UserPassword(props : RegisterStackScreenProps<"UserPassword">){
  const {formState: {errors}, setValue, register, handleSubmit, watch} = useForm<formProps>({resolver: yupResolver(userPasswordSchema)});
  const watchers = watch(["password", "passwordConfirm"]);
  const submitHandler = (data : formProps) =>{
    console.log(data)
  }
  return(
    <RegisterScreenWrapper backHandler={() => props.navigation.goBack()}
    style={[registerStyles.main, styles.contextBox]} >
      <View>
        <TextApp style={registerStyles.title} >Configura una contraseña segura</TextApp>
        <TextApp style={[registerStyles.textP, {marginBottom: 32}]} >Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</TextApp>
        <Form {...{register, setValue, errors}}>
          <LoginInput name="password" placeholder='Contraseña' inputStyles={styles.inputStyle} password />
          <LoginInput name="passwordConfirm" placeholder='Repite la contraseña' inputStyles={styles.inputStyle} password />
        </Form>
      </View>
      <LoginButton disabled={!(watchers.every((v) => v)) /* false if all the inputs have vals*/}
       theme='signin' title='CONTINUAR' onPress={handleSubmit(submitHandler)} />
    </RegisterScreenWrapper>
  )
}