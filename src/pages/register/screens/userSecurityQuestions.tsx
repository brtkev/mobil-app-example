import { useContext } from 'react'
import LoginInput from 'src/components/loginInput'
import SelectDropdown from 'src/components/selectDropdown'
import TextApp from 'src/components/textApp'
import {RegisterStackScreenProps} from 'src/components/types'
import RegisterContext from '../context'
import RegisterScreenWrapper from '../screenWrapper'
import styles from '../styles'


export default function UserSecurityQuestions(props : RegisterStackScreenProps<"userSecurityQuestions">){
  const items = ['¿En que ciudad naciste?', '¿Cómo se llama tu mejor amigo?', '¿País que quieras visitar?', '¿Cómo se llama tu Abuela?']
  return(
    <RegisterScreenWrapper style={styles.main} backHandler={() => props.navigation.goBack()} >
      <TextApp style={{fontSize: 28}} >Preguntas de seguridad</TextApp>
      <TextApp style={[styles.smText, {lineHeight: 22, marginBottom: 32}]} >Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</TextApp>
      <SelectDropdown style={{marginBottom: 16}} placeholder="Selecciona una pregunta" items={items}/>
      <LoginInput placeholder='Respuesta' />
    </RegisterScreenWrapper>
  )
}