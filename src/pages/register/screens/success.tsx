import { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import NavTop from 'src/components/navTop'
import PageWrapper from 'src/components/pageWrapper'
import TextApp from 'src/components/textApp'
import {RegisterStackScreenProps} from 'src/components/types'
import RegisterContext from '../context'

const styles = StyleSheet.create({
  main:{
    padding: 16
  },
  title:{
    fontSize: 24, lineHeight: 24, letterSpacing: 0.18, paddingTop: 15, marginBottom: 24
  },
  selectMargin: {
    marginBottom: 8
  }
})


export default function Success(props: RegisterStackScreenProps<"success">){
  const {userData} = useContext(RegisterContext);
  return(
    <PageWrapper>
       <NavTop backIcon='exit'  onPress={() => props.navigation.popToTop()} />
        
      <View style={styles.main} >
        <TextApp  style={styles.title}>Success</TextApp>
        <TextApp>{JSON.stringify(userData)}</TextApp>

      </View>
    </PageWrapper>
  )
}