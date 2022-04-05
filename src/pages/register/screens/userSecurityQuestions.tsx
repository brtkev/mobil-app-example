import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import Form from 'src/components/form'
import { securityQuestionsResolver } from 'src/components/formSchemas'
import LoginButton from 'src/components/loginButton'
import LoginInput from 'src/components/loginInput'
import SelectDropdown from 'src/components/selectDropdown'
import TextApp from 'src/components/textApp'
import {RegisterStackScreenProps} from 'src/components/types'
import colors from 'src/styles/colors'
import RegisterContext from '../context'
import RegisterScreenWrapper from '../screenWrapper'
import registerStyles from '../styles'

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
    props.navigation.push(props.route.params?.nextScreen || "pin");
  }
  const onSelectValue1 = (data : string, i : number) => setValue('securityQ1', data)
  const onSelectValue2 = (data : string, i : number) => setValue('securityQ2', data)
  return(
    <RegisterScreenWrapper style={[registerStyles.main, {flex:1 , justifyContent: "space-between", paddingBottom: 32}]} 
    backHandler={() => props.navigation.goBack()} backIcon="exit" >
      <View>
        <TextApp style={styles.title} >Preguntas de seguridad</TextApp>
        <TextApp style={styles.p} >Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</TextApp>
        <Form {...{register, setValue, errors}} noFocusNext >
          <SelectDropdown style={{marginBottom: 24}} placeholder="Selecciona una pregunta" items={items}
            onSelectValue={onSelectValue1}
            initialValue={props.route.params?.nextScreen === "UserPassword" ? 0 : undefined}
            inmutable
          />
          <LoginInput name="securityA1" style={{marginBottom: 32}} placeholder='Respuesta' />

          <SelectDropdown style={{marginBottom: 24}} placeholder="Selecciona una pregunta" items={items}
            onSelectValue={onSelectValue2}
            initialValue={props.route.params?.nextScreen === "UserPassword" ? 2 : undefined}
            inmutable
          />
          <LoginInput name="securityA2" style={{marginBottom: 32}} placeholder='Respuesta' />
        </Form>
      </View>
      <LoginButton disabled={!watchers.every(s => s)} theme='signin' title='CONTINUAR' 
      onPress={handleSubmit(submitHandler)}/>
      
    </RegisterScreenWrapper>
  )
}