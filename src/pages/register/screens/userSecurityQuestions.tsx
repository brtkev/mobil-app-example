import { useContext } from 'react'
import TextApp from 'src/components/textApp'
import {RegisterStackScreenProps} from 'src/components/types'
import RegisterContext from '../context'
import RegisterScreenWrapper from '../screenWrapper'

export default function UserSecurityQuestions(props : RegisterStackScreenProps<"userSecurityQuestions">){
  return(
    <RegisterScreenWrapper backHandler={() => props.navigation.goBack()} >
      <TextApp>security questions</TextApp>
    </RegisterScreenWrapper>
  )
}