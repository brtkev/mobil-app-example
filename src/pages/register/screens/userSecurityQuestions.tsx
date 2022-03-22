import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'
import Form from 'src/components/form'
import { securityQuestionsResolver } from 'src/components/formSchemas'
import LoginButton from 'src/components/loginButton'
import LoginInput from 'src/components/loginInput'
import SelectDropdown from 'src/components/selectDropdown'
import TextApp from 'src/components/textApp'
import {RegisterStackScreenProps} from 'src/components/types'
import RegisterContext from '../context'
import RegisterScreenWrapper from '../screenWrapper'
import styles from '../styles'


const items = ['¿En que ciudad naciste?', '¿Cómo se llama tu mejor amigo?', '¿País que quieras visitar?', '¿Cómo se llama tu Abuela?']

type formInput = {
  securityQ1 : string,
  securityA1 : string,
  securityQ2 : string,
  securityA2 : string,
}

export default function UserSecurityQuestions(props : RegisterStackScreenProps<"userSecurityQuestions">){
  const {updateData, userData} = useContext(RegisterContext);
  const {watch ,register, setValue, formState: {errors}, handleSubmit} = useForm<formInput>({resolver: securityQuestionsResolver()});
  const watchers = watch(['securityA1', 'securityA2', 'securityQ1', 'securityQ2'])

  const submitHandler = (data : formInput) => {
    updateData(data);
    props.navigation.push("pin");
  }

  return(
    <RegisterScreenWrapper style={[styles.main, {flex:1 , justifyContent: "space-between", paddingBottom: 32}]} 
    backHandler={() => props.navigation.goBack()} backIcon="exit" >
      <View>
        <TextApp style={{fontSize: 28}} >Preguntas de seguridad</TextApp>
        <TextApp style={[styles.smText, {lineHeight: 22, marginBottom: 32}]} >Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</TextApp>
        <Form {...{register, setValue, errors}} noFocusNext >
          <SelectDropdown style={{marginBottom: 24}} placeholder="Selecciona una pregunta" items={items}
            onSelectValue={(data, i) => setValue('securityQ1', data)}
          />
          <LoginInput name="securityA1" style={{marginBottom: 32}} placeholder='Respuesta' />

          <SelectDropdown style={{marginBottom: 24}} placeholder="Selecciona una pregunta" items={items}
            onSelectValue={(data, i) => setValue('securityQ2', data)}
          />
          <LoginInput name="securityA2" style={{marginBottom: 32}} placeholder='Respuesta' />
        </Form>
      </View>
      <LoginButton disabled={!watchers.every(s => s)} theme='signin' title='CONTINUAR' 
      onPress={handleSubmit(submitHandler)}/>
      
    </RegisterScreenWrapper>
  )
}