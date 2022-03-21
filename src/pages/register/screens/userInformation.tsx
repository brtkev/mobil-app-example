import { useEffect, useState } from 'react'
import { StatusBar,StyleSheet, View, KeyboardAvoidingView, Keyboard, Dimensions } from 'react-native'
import LoginButton from 'src/components/loginButton'
import LoginInput from 'src/components/loginInput'
import NavTop from 'src/components/navTop'
import PageWrapper from 'src/components/pageWrapper'
import TextApp from 'src/components/textApp'
import {RegisterStackScreenProps} from 'src/components/types'
import registerStyles from '../styles'

const styles = StyleSheet.create({

  main:{
    display:"flex", justifyContent: "flex-start", flex:1,
    height: Dimensions.get("window").height - (StatusBar.currentHeight || 0)
  },
  contextBox: {
    flex: 1, justifyContent: "space-between"
  },
  inputStyle: {
    fontSize : registerStyles.textP.fontSize
  }
})

type formInput = {
  name : string,
  lastName : string,
  email : string
}
export default function UserInformation(props : RegisterStackScreenProps<"UserInfo">){
  const [keyboardOffset, setKeyboardOffset] = useState(0); 
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", e => setKeyboardOffset(e.endCoordinates.height))
    Keyboard.addListener("keyboardDidHide", e => setKeyboardOffset(0))
    
  }, [])

  return(
    <PageWrapper scrollable >
      <View style={[styles.main, {height: styles.main.height + keyboardOffset, paddingBottom: keyboardOffset }]} >
        <NavTop onPress={() => props.navigation.goBack()} />
        <View style={[registerStyles.main, styles.contextBox ]} >
          <View  >
            <TextApp style={registerStyles.title} >Información Personal</TextApp>
            <TextApp style={[registerStyles.textP, {marginBottom: 32}]} >Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Vestibulum, purus ut enim.</TextApp>
            <LoginInput placeholder='Nombre' inputStyles={styles.inputStyle} />
            <LoginInput placeholder='Apellido' inputStyles={styles.inputStyle} />
            <LoginInput placeholder='Correo Electrónico' inputStyles={styles.inputStyle} />
          </View>
          <LoginButton disabled theme='signin'  title='CONTINUAR' onPress={() => console.log("press")} />
        </View>
      </View>
    </PageWrapper>
  )
}
