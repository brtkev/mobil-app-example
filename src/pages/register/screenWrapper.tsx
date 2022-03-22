import { useEffect, useState } from "react";
import { View, ViewProps, TouchableWithoutFeedbackProps, StyleSheet, Dimensions, StatusBar, Keyboard } from "react-native";
import NavTop from "src/components/navTop";
import PageWrapper from "src/components/pageWrapper";

const styles = StyleSheet.create({
  main:{
    display:"flex", justifyContent: "flex-start", flex:1,
    height: Dimensions.get("window").height - (StatusBar.currentHeight || 0)
  }
})

interface Props extends ViewProps{
  backHandler? : TouchableWithoutFeedbackProps["onPress"];
  backIcon? : "exit" | "back"
}

export default function RegisterScreenWrapper({backHandler, backIcon,children, style,...props} : Props){
  const [keyboardOffset, setKeyboardOffset] = useState(0)
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", e => setKeyboardOffset(e.endCoordinates.height))
    Keyboard.addListener("keyboardDidHide", e => setKeyboardOffset(0))
    
  }, [])
  return(
    <PageWrapper scrollable>
      <View style={[styles.main, {height: styles.main.height + keyboardOffset, paddingBottom: keyboardOffset }]} >
        <NavTop onPress={backHandler} backIcon={backIcon} />
        <View style={style}>
          {children}
        </View>
      </View>
    </PageWrapper>
  )
}