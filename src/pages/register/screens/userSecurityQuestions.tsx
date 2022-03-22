import { useContext } from 'react'
import SelectDropdown from 'src/components/selectDropdown'
import TextApp from 'src/components/textApp'
import {RegisterStackScreenProps} from 'src/components/types'
import RegisterContext from '../context'
import RegisterScreenWrapper from '../screenWrapper'
import styles from '../styles'


export default function UserSecurityQuestions(props : RegisterStackScreenProps<"userSecurityQuestions">){
  const items = ['a', 'b', 'c']
  return(
    <RegisterScreenWrapper style={styles.main} backHandler={() => props.navigation.goBack()} >
      <TextApp style={{fontSize: 28}} >Preguntas de seguridad</TextApp>
      <TextApp style={[styles.smText, {lineHeight: 22, marginBottom: 32}]} >Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</TextApp>
      <SelectDropdown placeholder="letters" items={items}/>
    </RegisterScreenWrapper>
  )
}