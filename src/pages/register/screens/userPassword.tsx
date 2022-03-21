import PageWrapper from 'src/components/pageWrapper'
import TextApp from 'src/components/textApp'
import {RegisterStackScreenProps} from 'src/components/types'

export default function UserPassword(props : RegisterStackScreenProps<"UserPassword">){
  console.log(props.route.params)
  return(
    <PageWrapper>
      <TextApp>password screen</TextApp>
    </PageWrapper>
  )
}