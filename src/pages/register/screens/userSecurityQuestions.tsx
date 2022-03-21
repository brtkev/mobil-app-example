import TextApp from 'src/components/textApp'
import {RegisterStackScreenProps} from 'src/components/types'
import RegisterScreenWrapper from '../screenWrapper'

export default function UserSecurityQuestions(props : RegisterStackScreenProps<"userSecurityQuestions">){
  return(
    <RegisterScreenWrapper>
      <TextApp>security questions</TextApp>
    </RegisterScreenWrapper>
  )
}